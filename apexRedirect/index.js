exports.handler = async (event) => {
  const request = event.Records[0].cf.request;

  if (request.headers.host[0].value === 'www.index.com') {
    return {
      status: '301',
      statusDescription: `Redirecting to apex domain`,
      headers: {
        location: [{
          key: 'Location',
          value: `https://index.com${request.uri}`
        }]
      }
    };
  }
  
  return request;
};