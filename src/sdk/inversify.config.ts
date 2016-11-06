import { Container } from 'inversify';
import { TYPES } from './types';
import {
  SchemaService,
  ResolverService,
  MockService,
} from './services';
import { SDK } from './SDK';

export const container = new Container();
container.bind(TYPES.SchemaService).to(SchemaService);
container.bind(TYPES.ResolverService).to(ResolverService);
container.bind(TYPES.MockService).to(MockService);
container.bind(TYPES.SDK).to(SDK);
