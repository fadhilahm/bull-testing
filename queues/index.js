const Redis = require(`ioredis`);
const Queue = require(`bull`);

let redisUrl = null;
if (process.env.REDIS_URL) {
  redisUrl = process.env.REDIS_URL;
};

const client = new Redis(redisUrl);
const subscriber = new Redis(redisUrl);

const opts = {
  createClient: (type) => {
    switch (type) {
      case `client`:
        return client;
      case `subscriber`:
        return subscriber;
      default:
        return new Redis(redisUrl);
    }
  }
};

const loggingDataQueue = new Queue(`logging_data`, opts);

module.exports = {
  loggingDataQueue
};
