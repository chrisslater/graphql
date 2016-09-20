import user from "./modules/user";
import sdk from "../sdk";
const { SDK } = sdk.container;

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
    String: () => "It works!",
};

const resolver = {
    Root: {
        testString: () => "W00t",
        user: () => "yay",
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
