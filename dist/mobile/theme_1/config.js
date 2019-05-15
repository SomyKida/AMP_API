const port = process.env.PORT || 5000;
const base_url = "http://localhost" + ':' + port;
// const base_url = 'https://mongodb-multi-instance-test.herokuapp.com'

module.exports = {
  PORT: port,
  BASE_URL: base_url,
};