export abstract class Service {
  protected values: any[] = [];
  public abstract build(): any;

  public register(value: any): void {
    this.values.push(value);
  }
}

export default Service;
