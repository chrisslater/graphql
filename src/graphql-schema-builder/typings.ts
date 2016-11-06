import { GraphQLSchema } from 'graphql';

type ResolveFn = () => any;
type Resolver = { [key: string]: ResolveFn };
export interface ResolverStore {
  [key: string]: Resolver;
}

type MockFn = () => any;
export interface MockStore {
  [key: string]: MockFn;
};

export interface ISchema {
  schema: string;
  resolver: ResolverStore;
  mock?: MockStore;
  [key: string]: any;
}

export interface SchemaModule {
  schema: string;
  resolver: ResolverStore;
  mock?: MockStore;
  [key: string]: any;
}

export type SchemaStrings = 'schema' | 'resolver' | 'mock';
export type SchemaValues = string | ResolverStore | MockStore;

export interface IService {
  register(value: any): void;
}
export interface ISchemaService extends IService {
  build(): GraphQLSchema;
}
export interface IResolverService extends IService {
  build(): ResolverStore;
}
export interface IMockService extends IService {
  build(): MockStore;
};

export interface ISchemaBuilder {
  register(obj: ISchema): void;
  create(mockSchema?: boolean): GraphQLSchema;
}
