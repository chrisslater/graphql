import * as TYPES from './types';
import { container } from './inversify.config';
import { ISchemaBuilder, SchemaModule } from './typings';

export const SchemaBuilder = container.get<ISchemaBuilder>(TYPES.SchemaBuilder);
export { SchemaModule };
