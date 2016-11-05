import { GraphQLSchema } from "graphql";
import { buildSchemaFromTypeDefinitions } from "graphql-tools";
import Service from "../service";

export interface ISchemaService extends Service {
  build(): GraphQLSchema;
}

class SchemaService extends Service implements ISchemaService {
  public build(): GraphQLSchema {
    return buildSchemaFromTypeDefinitions(this.values);
  }
}

export default SchemaService;
