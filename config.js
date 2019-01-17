module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost/short',
  SHORT_URL: process.env.SHORT_URL || 'http://localhost:3044',
  PORT: process.env.PORT || 3044,
};
