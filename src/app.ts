import express from 'express';
import { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } from 'simple-oauth2';

const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  getAuthorizationCode(res)
})

app.get('/callback', (req: any, res: any) => {
  callbackAuthorizationCode(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


const config = {
  client: {
    id: '16434',
    secret: '3i0PTLQmTVIMzf4hncycshNTJiM5N9cC9MHhxtUD'
  },
  auth: {
    tokenHost: 'https://pixelfed.social/oauth/authorize'
  }
};

async function getAuthorizationCode(res: any) {
  const client = new AuthorizationCode(config);
 
  const authorizationUri = client.authorizeURL({
    redirect_uri: 'http://localhost:3000/callback',
    scope: 'read',
    //state: '<state>'
  });
 
  // Redirect example using Express (see http://expressjs.com/api.html#res.redirect)
  res.redirect(authorizationUri);
 
  // const tokenParams = {
  //   code: '<code>',
  //   redirect_uri: 'http://localhost:3000/callback',
  //   scope: '<scope>',
  // };
 
  // try {
  //   const accessToken = await client.getToken(tokenParams);
  // } catch (error) {
  //   console.log('Access Token Error', error.message);
  // }
}

async function callbackAuthorizationCode(req: any, res: any) {
  res.send("Callback code is " + req.query.code);
}
