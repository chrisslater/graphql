// token: 353dfa652425633fa2451669661a82fd6fec1dc1
import 'isomorphic-fetch';
import { SchemaModule } from 'graphql-schema-builder';

const schema = `
  type Github {
    github: String
  }
`;

const resolver = {
  github: () => {
    return 'string';
  },
};

const mod: SchemaModule = { schema, resolver };

export default mod;
