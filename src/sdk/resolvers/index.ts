import Service from "../service";

type ResolveFn = () => any;
type ResolverObj = { [key: string]: ResolveFn };

export interface IResolversObj {
  [key: string]: ResolverObj;
}

class ResolversService extends Service {
  public build(): IResolversObj {
    const values: IResolversObj[] = this.values;
    return Object.assign({}, ...values);
  }
}

export default ResolversService;
