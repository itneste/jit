import { Injectable } from '@angular/core';

@Injectable()
export class TestCardFormFrmControllerService {
  constructor() { }
  /**
   * 方法1
   * @remarks 
   * @returns 
   */
  public method1() {
    const params = this['context'].eventParam;
    console.log(params);
  }

  /**
   * 方法2
   * @remarks 
   * @returns 
   */
  public method2() {
    const params = this['context'].eventParam;
    console.log(params);
  }
}
