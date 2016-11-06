import 'isomorphic-fetch';
import { SchemaModule } from 'graphql-schema-builder';

type GithubUser = {
  login: string;
  url: string;
};

class Client {
  protected baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async fetch(url: string): Promise<Object> {
    const response = await fetch(this.baseUrl + url);
    return await response.json();
  }
}

class GithubClient {
  protected client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  public retrieveUser(username: string): Promise<GithubUser> {
    return this.client.fetch(`users/${username}`);
  }
}

const githubClient = new GithubClient(
  new Client('https://api.github.com/'),
);

const schema = `
  type Github {
    login: String
    url: String
  }

  type Query {
    testString: String
    github(username: String): Github
  }

  schema {
    query: Query
  }
`;

const mock = {
    String: () => 'It works!',
};

type GithubArgs = {
  username: string;
};

const resolver = {
  Query: {
    github(root: string | undefined, args: GithubArgs = { username: 'boafish' }): Promise<GithubUser> {
      return githubClient.retrieveUser(args.username);
    },
  },
};

const mod: SchemaModule = { schema, resolver, mock };

export default mod;
