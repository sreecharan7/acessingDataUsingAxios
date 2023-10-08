import axios from "axios"

export default function externalDataSource(req, res, next) {

    const url = 'https://intent-kit-16.hasura.app/api/rest/blogs'; // Replace with your external source URL
    const headers = {
      "x-hasura-admin-secret": '32qR4KmXOIpsGPQKMqEJHGJS27G5s7HdSKO3gdtQd2kv5e852SiYwWNfxkZOBuQ6',
    };

    axios.get(url, { headers })
      .then(response => {
        req.externalData = response.data;
        next(); 
      })
      .catch(error => {
        res.status(500).send( 'Failed to acess the data from the external source' );
      });

  }
