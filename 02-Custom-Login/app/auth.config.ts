interface AuthConfiguration {
    clientID: string,
    domain: string,
    callbackURL: string
}

export const myConfig: AuthConfiguration = {
    clientID: 'yInTh4D0KKvLPniomfKSXcTwwCKcByi2',
    domain: 'sheeludemo.auth0.com',
    // You may need to change this!
    callbackURL: 'http://localhost:3000/'
};
