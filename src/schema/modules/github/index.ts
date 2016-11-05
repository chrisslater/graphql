// token: 353dfa652425633fa2451669661a82fd6fec1dc1
import 'isomorphic-fetch';

class Request {
  public static async fetch(url: string): Promise<Object> {
    return await fetch(url);
  }
}

interface Mod {
  schema?: string;
  resolver?: Object;
  mock?: Object;
}

const mod: Mod = {};

mod.schema = `
  github: String
`;

mod.resolver = {
  github: () => {
    return 'string';
  },
};

// mod.mock = {
//   // User: () => ({
//   //   age: () => '29',
//   //   name: 'Chris',
//   // }),
// };

export default mod;
