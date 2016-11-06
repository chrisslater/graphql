import { GraphQLSchema } from 'graphql';
import { buildSchemaFromTypeDefinitions } from 'graphql-tools';
import { Service } from './Service';
import { ISchemaService } from '../typings';

import { injectable } from 'inversify';
import 'reflect-metadata';

@injectable()
export class SchemaService extends Service implements ISchemaService {
  public build(): GraphQLSchema {
    return buildSchemaFromTypeDefinitions(this.values);
  }
}
