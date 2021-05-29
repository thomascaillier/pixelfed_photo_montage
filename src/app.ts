import express from 'express';
import { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } from 'simple-oauth2';
import { callbackAuthorizationCode } from './oauth/callbackAuthorizationCode';
import { getAuthorizationCode } from './oauth/getAuthorizationCode'

const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.redirect('/authorization')
})

app.get('/authorization', (req: any, res: any) => {
  getAuthorizationCode(res)
})

app.get('/authorization/callback', (req: any, res: any) => {
  callbackAuthorizationCode(req, res)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})