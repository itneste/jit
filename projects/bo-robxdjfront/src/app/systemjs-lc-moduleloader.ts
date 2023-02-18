
import { Injectable, NgModuleFactoryLoader, SystemJsNgModuleLoaderConfig, NgModuleFactory, Optional, Compiler } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { from } from "rxjs";
import { switchMap , catchError } from "rxjs/operators";

declare var System: any;
const _SEPARATOR = '#';
const FACTORY_CLASS_SUFFIX = 'NgFactory';

const DEFAULT_CONFIG: SystemJsNgModuleLoaderConfig = {
    factoryPathPrefix: '',
    factoryPathSuffix: '.ngfactory',
};

/**
 * SystemjsLcModuleloaderGenerator that uses SystemJS to load NgModuleFactory
 * @publicApi
 * @deprecated the `string` form of `loadChildren` is deprecated, and `SystemJsNgModuleLoader` is
 * part of its implementation. See `LoadChildren` for more details.
 */
@Injectable()
export class SystemjsLcModuleloaderGenerator implements NgModuleFactoryLoader {
    private _config: SystemJsNgModuleLoaderConfig;


    constructor(private http: HttpClient, private _compiler: Compiler, @Optional() config?: SystemJsNgModuleLoaderConfig) {
        this._config = config || DEFAULT_CONFIG;
    }

    load(path: string): Promise<NgModuleFactory<any>> {
        return this.loadFactory(path);
    }

    /**
     * @private
     * @param {?} path
     * @return {?}
     */
    loadAndCompile(path) {
        let [module, exportName] = path.split(_SEPARATOR);
        if (exportName === undefined) {
            exportName = 'default';
        }
        let modulePath = this._config.factoryPathPrefix + module + this._config.factoryPathSuffix;
        return System.import(modulePath)
            .then((module) => module[exportName])
            .then((type) => this.checkNotEmpty(type, module, exportName))
            .then((type) => this._compiler.compileModuleAsync(type));
    }

    private loadFactory(path: string): Promise<NgModuleFactory<any>> {
        let [module, exportName] = path.split(_SEPARATOR);
        let factoryClassSuffix = FACTORY_CLASS_SUFFIX;
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        let splitWithSeperator = module.split("/");
        const formFileName = splitWithSeperator[splitWithSeperator.length - 1];
        let projectPath = "/apps/fssp/fssc/web/bo-robxdjfront/";
        splitWithSeperator = splitWithSeperator.map((item) => {
            return decodeURI(item);
        });
        if (splitWithSeperator.length == 5 && splitWithSeperator[1] == splitWithSeperator[4]) {
            // 认为是运行时定制表单
            const dimInfo = splitWithSeperator[1] + "/" + splitWithSeperator[2].toLowerCase() + "/" + splitWithSeperator[3].toLowerCase() + "/";
            projectPath = projectPath + dimInfo;
        }
        const httpObservable = this.http.get(projectPath + "version.json?v=" + new Date().getTime()).pipe(switchMap((responseData: any[]) => {
            let newVersion = "0.0.1";
            if (responseData) {
                responseData.forEach((item) => {
                    if (item && item.category == "form" && item.key == (formFileName + this._config.factoryPathSuffix)) {
                        newVersion = item.value;
                    }
                });
            }
            return this.loadModule(exportName, factoryClassSuffix, module, newVersion);
        }));
        return httpObservable.toPromise();
    }

    private loadModule(exportName: string, factoryClassSuffix: string, module: string, version: string) {
        let modulePath = this._config.factoryPathPrefix + module + this._config.factoryPathSuffix;
        if (version) {
            modulePath = modulePath + "?v=" + version;
        }
        const sysjsPromise = System.import(modulePath)
            .then((module: any) =>{
                    if (module[exportName + factoryClassSuffix]) {
                    return module[exportName + factoryClassSuffix];
                } else {
                    const compileResult = this._compiler.compileModuleAsync(module[exportName]);
                    return compileResult;
                }
            })
            .then((factory: any) => this.checkNotEmpty(factory, module, exportName)) as Promise<NgModuleFactory<any>>;

        const systemjsObservable = from(sysjsPromise);
        return systemjsObservable;
    }

    private checkNotEmpty(value: any, modulePath: string, exportName: string): any {
        if (!value) {
            throw new Error("Cannot find " + exportName + " in " + modulePath);
        }
        return value;
    }
}