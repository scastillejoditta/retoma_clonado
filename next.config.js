module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  // Esto para poder leer el .env. Hay alguna forma más segura de hacerlo?
  env: {
    URL_AIRTABLE_TOKEN: process.env.URL_AIRTABLE_TOKEN,
    AIRTABLE_KEY: process.env.AIRTABLE_KEY
  }
}
