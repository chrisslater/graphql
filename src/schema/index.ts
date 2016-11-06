import * as modules from './modules';
import { SchemaBuilder } from 'graphql-schema-builder';

// SchemaBuilder.register(modules.user);
// SchemaBuilder.register(modules.github);
SchemaBuilder.register(modules.root);

export const schema = SchemaBuilder.create();

export default schema;
