export abstract class Service {
  protected values: Array<any> = [];

  public register(value: any): void {
    this.values.push(value);
  }
}

export default Service;
