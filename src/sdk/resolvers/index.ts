import Service from "../service";

type ResolveFn = () => any;
type ResolverObj = { [key: string]: ResolveFn };

export interface ResolversObj {
  [key: string]: ResolverObj;
}

class ResolversService extends Service {
  public build(): ResolversObj {
    const values: ResolversObj[] = this.values;
    return Object.assign({}, ...values);
  }
}

export default ResolversService;
