const PRODUCTION = process.env.ENV === "local" ? false : true
const DB_URI=process.env.DB
module.exports = {
  PRODUCTION,DB_URI
};