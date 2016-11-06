import { GraphQLSchema } from 'graphql';
import * as tools from 'graphql-tools';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import * as TYPES from './types';
import {
  ISchemaBuilder,
  ISchemaService,
  IResolverService,
  IMockService,
  ISchema,
  SchemaStrings,
  SchemaValues,
} from './typings';

@injectable()
export class SchemaBuilder implements ISchemaBuilder {
  @inject(TYPES.SchemaService) protected schema: ISchemaService;
  @inject(TYPES.ResolverService) protected resolvers: IResolverService;
  @inject(TYPES.MockService) protected mocks: IMockService;

  public register(obj: ISchema): void {
    const that = this;
    Object.keys(obj).forEach((key: SchemaStrings) => {
      that.registerProperty(key, obj[key]);
    });
  }

  public create(mockSchema: boolean = false): GraphQLSchema {
    const schema = this.schema.build();
    tools.addResolveFunctionsToSchema(schema, this.resolvers.build());

    if (mockSchema) {
      tools.addMockFunctionsToSchema({ schema, mocks: this.mocks.build() });
    }

    return schema;
  }

  protected registerProperty(name: SchemaStrings, value: SchemaValues): void {
    switch (name) {
      case 'schema':
        return this.schema.register(value);
      case 'resolver':
        return this.resolvers.register(value);
      case 'mock':
        return this.mocks.register(value);
      default:
    }
  }
}
