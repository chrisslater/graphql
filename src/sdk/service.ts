export interface IService {
  register(value: any): void;
}

abstract class Service implements IService {
  protected values: Array<any> = [];
  public register(value: any): void {
    this.values.push(value);
  }
}

export default Service;
