const port = process.env.PORT || 5000;
const base_url = "http://localhost" + ':' + port;

module.exports = {
    PORT: port,
    BASE_URL: base_url,
};