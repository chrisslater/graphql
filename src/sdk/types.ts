export interface IService {
  register(value: any): void;
}

export interface ISchemaService extends IService {

}

type ResolveFn = () => any;
type Resolver = { [key: string]: ResolveFn };
export interface ResolverCollection {
  [key: string]: Resolver;
}

export interface IResolverService extends IService {

}

type MockFn = () => any;
export interface MockCollection {
  [key: string]: MockFn;
};

export interface IMockService extends IService {

};

export type SchemaStrings = 'schema' | 'resolver' | 'mock';
export type SchemaValues = string | ResolverCollection | MockCollection;

export interface ISchema {
  schema: string;
  resolver: ResolverCollection;
  mock?: MockCollection;
  [key: string]: any;
}

export interface ISDK {
  schema: ISchemaService;
  resolvers: IResolverService;
  mocks: IMockService;
  registerProperty(name: string, value: any): void;
  register(obj: ISchema): void;
  new (...args: any[]): any;
}

export const TYPES = {
  MockService: Symbol('MockService'),
  ResolverService: Symbol('ResolverService'),
  SDK: Symbol('SDK'),
  SchemaService: Symbol('SchemaService'),
};
