// import axios from 'axios';
// import { createClient } from 'pexels';

const axios = require('axios');
const { createClient } = require('pexels');

exports.getAllUniversity = async (req, res) => {
  var options = {
    method: 'GET',
    url: 'http://universities.hipolabs.com/search',
  };

  try {
    const response = await axios.request(options);

    const universities = await response.data;

    const client = createClient(
      '563492ad6f917000010000018b6837d7c8aa4fd2b23678e9e7ddfa7b',
    );
    const query = 'university';

    const photos = await client.photos.search({ query, per_page: 48 });

    res.status(200).json({
      success: true,
      universities,
      photos: photos.photos,
    });
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error.message,
      universities: [],
      data: [],
    });
  }
};

// module.export = getAllUniversity;
