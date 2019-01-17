module.exports = {
  apps : [{
    name: 'pp-short',
    script: '/home/shorty/pp-short/run.js',
    cwd: '/home/shorty/pp-short',
    env: {
      NODE_ENV: 'production',
      MONGO_URL: 'mongodb://localhost/pp-short',
      SHORT_URL: 'https://pp.djnd.si',
      PORT: 7006,
    },
    output: '/home/shorty/log/pp-short.out.log',
    error: '/home/shorty/log/pp-short.err.log',
    log: '/home/shorty/log/pp-short.combined.log',
    log_date_format: 'YYYY-MM-DDTHH:mm:ssZ',
  }],
};
