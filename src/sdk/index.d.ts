import { GraphQLSchema } from 'graphql';

declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
}

export class Service {
  protected values: Array<any>;
  public register(value: any): void;
}

export class SchemaService extends Service {
  public build(): GraphQLSchema;
}
