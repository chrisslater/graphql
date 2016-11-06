import { SchemaModule } from 'graphql-schema-builder';

const schema = `
  type User {
    name: String
  }
`;

const resolver = {
  User: {
    name: () => 'USER',
  },
};

const mock = {
  User: () => ({
    age: () => '29',
    name: 'Chris',
  }),
};

export const mod: SchemaModule = { schema, resolver, mock };
export default mod;
