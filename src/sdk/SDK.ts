import * as tools from 'graphql-tools';
import { injectable, inject } from 'inversify';
import 'reflect-metadata';
import {
  TYPES,
  ISchemaService,
  IResolverService,
  IMockService,
  ISchema,
  SchemaStrings,
  SchemaValues,
} from './types';

@injectable()
export class SDK {
  @inject(TYPES.SchemaService) protected schema: ISchemaService;
  @inject(TYPES.ResolverService) protected resolvers: IResolverService;
  @inject(TYPES.MockService) protected mocks: IMockService;

  public registerProperty(name: SchemaStrings, value: SchemaValues): void {
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

  public register(obj: ISchema): void {
    const that = this;
    Object.keys(obj).forEach((key: SchemaStrings) => {
      that.registerProperty(key, obj[key]);
    });
  }

  public create() {
    const schema = this.schema.build();
    tools.addResolveFunctionsToSchema(schema, this.resolvers.build());
    // tools.addMockFunctionsToSchema({ schema, mocks: this.mocks.build() });
    return schema;
  }
}
