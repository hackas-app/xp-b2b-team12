import axios from 'axios';
import qs from 'qs';

const xpApiInstance = axios.create({
  baseURL: 'https://openapi.xpi.com.br/',
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'insomnia/2021.7.2',
  },
});

export async function getToken() {
  const clientId = process.env.CLIENT_ID;
  const secretKey = process.env.SECRET_KEY;

  const body = qs.stringify({
    client_id: clientId,
    client_secret: secretKey,
    grant_type: 'client_credentials',
  });

  const { data } = await xpApiInstance.post('/oauth2/v1/access-token', body, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return data.access_token;
}

export default xpApiInstance;