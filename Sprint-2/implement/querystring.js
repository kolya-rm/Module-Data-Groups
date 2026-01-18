function parseQueryString(queryString) {
  const queryParams = {};
  
  if (typeof queryString !== "string" || queryString.length === 0) {
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

module.exports = parseQueryString;
