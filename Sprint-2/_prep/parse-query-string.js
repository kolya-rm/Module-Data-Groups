function parseQueryString(queryString) {
  const queryParams = {};
  
  if (queryString.length === 0) {
    return queryParams;
  }

  const [key, value] = queryString.split('=');
  queryParams[key] = value;

  return queryParams;
}

module.exports = parseQueryString;
