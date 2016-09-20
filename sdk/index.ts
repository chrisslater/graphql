import * as Bottle from "bottlejs";

// Services
import Schema from "./schema";
import Resolvers, { IResolversObj } from "./resolvers";
import Mocks, { IMockObj } from "./mocks";

import * as tools from "graphql-tools";

const bottle = new Bottle();

bottle.service("Schema", Schema);
bottle.service("Resolvers", Resolvers);
bottle.service("Mocks", Mocks);

type SchemaStrings = "schema"|"resolver"|"mock";
type SchemaValues = string|IResolversObj|IMockObj;

interface ISchemaObj {
  schema: string;
  resolver: IResolversObj;
  mock?: IMockObj;
  [key: string]: any;
}

interface ISDK {
  // schema: ISchemaService;
  // resolvers: IResolversService;
  // mocks: IMocksService;
  registerProperty(name: string, value: any): void;
  register(obj: ISchemaObj): void;
}

class SDK implements ISDK {
  protected schema: Schema;
  protected resolvers: Resolvers;
  protected mocks: Mocks;

  constructor(schema: Schema, resolvers: Resolvers, mocks: Mocks) {
    this.schema = schema;
    this.resolvers = resolvers;
    this.mocks = mocks;
  }

  public registerProperty(name: SchemaStrings, value: SchemaValues): void {
    switch (name) {
      case "schema":
        return this.schema.register(value);
      case "resolver":
        return this.resolvers.register(value);
      case "mock":
        return this.mocks.register(value);
      default:
    }
  }

  public register(obj: ISchemaObj): void {
    const that = this;
    Object.keys(obj).forEach((key: SchemaStrings) => {
      that.registerProperty(key, obj[key]);
    });
  }

  public create() {
    const schema = this.schema.build();
    tools.addResolveFunctionsToSchema(schema, this.resolvers.build());
    tools.addMockFunctionsToSchema({ schema, mocks: this.mocks.build() });
    return schema;
  }
}

bottle.service("SDK", SDK, "Schema", "Resolvers", "Mocks");

export default bottle;
