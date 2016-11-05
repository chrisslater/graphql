interface IMod {
  schema?: string;
  resolver?: Object;
  mock?: Object;
}

const mod: IMod = {};

mod.schema = `
  type User {
    name: String
  }
`;

mod.resolver = {
  User: {
    name: () => "USER",
  },
};

mod.mock = {
  User: () => ({
    age: () => "29",
    name: "Chris",
  }),
};

export default mod;
