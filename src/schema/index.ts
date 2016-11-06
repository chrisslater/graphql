import github from './modules/github';
import user from './modules/user';
import { SchemaBuilder } from '../graphql-schema-builder';

import 'isomorphic-fetch';

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
    user: User
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
    async github(root: string | undefined, args: GithubArgs = { username: 'boafish' }): Promise<GithubUser> {
      return githubClient.retrieveUser(args.username);
    },
    testString: () => 'w00t',
    // user: () => 'yay',
  },
};

const root = {
  schema,
  resolver,
  mock,
};

// SDK.register(github);
SchemaBuilder.register(user);
SchemaBuilder.register(root);

export default SchemaBuilder.create();
