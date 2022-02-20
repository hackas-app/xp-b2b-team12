import xpApiInstance, { getToken } from "../../src/data/axios";

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const accessToken = await getToken();
     
      const { data } = await xpApiInstance.get('/broker/products', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        }
      });
  
      res.status(200).json({ data });
    } catch(err) {
      console.error(err);
      res.status(500).json({ message: 'Error!!!' });
    }
  } else {
    res.status(405).json({ message: 'Wrong method!' });
  }  
}