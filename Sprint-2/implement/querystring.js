function parseQueryString(queryString) {
  const queryParams = {};
  
  if (queryString.length === 0) {
    return queryParams;
  }

  const keyValuePairs = queryString.split("&");

  for (const pair of keyValuePairs) {
    if (pair.indexOf("=") > 0) {
      const [key, value] = pair.split(/=(.*)/);
      queryParams[key] = value;
    }
  }

  return queryParams;
}

// parseQueryString("&abcde&");

module.exports = parseQueryString;
