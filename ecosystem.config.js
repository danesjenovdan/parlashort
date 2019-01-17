module.exports = {
  apps : [{
    name: 'parlashort',
    script: '/home/shorty/parlashort/run.js',
    cwd: '/home/shorty/parlashort',
    env: {
      NODE_ENV: 'production',
      MONGO_URL: 'mongodb://localhost/short',
      SHORT_URL: 'https://parla.me',
      PORT: 7006,
    },
    output: '/home/shorty/log/parlashort.out.log',
    error: '/home/shorty/log/parlashort.err.log',
    log: '/home/shorty/log/parlashort.combined.log',
    log_date_format: 'YYYY-MM-DDTHH:mm:ssZ',
  }],
};
