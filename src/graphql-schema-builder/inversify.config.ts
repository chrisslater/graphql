import { Container } from 'inversify';
import * as TYPES from './types';
import {
  IMockService,
  IResolverService,
  ISchemaBuilder,
  ISchemaService,
} from './typings';
import * as Services from './services';
import { SchemaBuilder } from './SchemaBuilder';

export const container = new Container();
container.bind<ISchemaService>(TYPES.SchemaService).to(Services.SchemaService);
container.bind<IResolverService>(TYPES.ResolverService).to(Services.ResolverService);
container.bind<IMockService>(TYPES.MockService).to(Services.MockService);
container.bind<ISchemaBuilder>(TYPES.SchemaBuilder).to(SchemaBuilder);
