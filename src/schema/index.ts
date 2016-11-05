import user from './modules/user';
import SDK from '../sdk';

const schema = `
    schema {
        query: Root
    }

    type Root {
        testString: String
        user: User
    }
`;

const mock = {
    String: () => 'It works!',
};

const resolver = {
    Root: {
        testString: () => 'W00t',
        user: () => 'yay',
    },
};

const root = {
    schema,
    resolver,
    mock,
};

SDK.register(user);
SDK.register(root);

export default SDK.create();
