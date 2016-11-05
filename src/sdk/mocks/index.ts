import Service from "../service";

export interface IMocksService extends Service {
  build(): Object;
}

type MockFn = () => any;

export interface IMockObj {
  [key: string]: MockFn;
};

class MocksService extends Service implements IMocksService {
  public build(): IMockObj {
    const values: IMockObj[] = this.values;
    return Object.assign({}, ...values);
  }
}

export default MocksService;
