import { AuthorizationCode } from 'simple-oauth2';

const config = {
    client: {
      id: '16434',
      secret: '3i0PTLQmTVIMzf4hncycshNTJiM5N9cC9MHhxtUD'
    },
    auth: {
      tokenHost: 'https://pixelfed.social/oauth/authorize'
    }
  };

export async function getAuthorizationCode(res: any) {
    const client = new AuthorizationCode(config);

    const authorizationUri = client.authorizeURL({
        redirect_uri: 'http://localhost:3000/authorization/callback',
        scope: 'read',
        //state: '<state>'
    });

    // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
    res.redirect(authorizationUri);
}