// token: 353dfa652425633fa2451669661a82fd6fec1dc1

interface Mod {
  schema?: string;
  resolver?: Object;
  mock?: Object;
}

const mod: Mod = {};

mod.schema = `
  type User {
    name: String
  }
`;

mod.resolver = {
  User: {
    name: () => 'USER',
  },
};

mod.mock = {
  User: () => ({
    age: () => '29',
    name: 'Chris',
  }),
};

export default mod;
