function parseQueryString(queryString) {
  const queryParams = {};
  
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    const [key, value] = pair.split(/=(.*)/);
    if (key != "") {
      queryParams[key] = value;
    }
  }

  return queryParams;
}

module.exports = parseQueryString;
