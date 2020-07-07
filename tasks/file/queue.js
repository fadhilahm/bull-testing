const { loggingDataQueue } = require(`../../queues`);

module.exports = {
  addLoggingDataQueue: async (data) => {
    return loggingDataQueue.add(
      { data },
      {
        attempts: 10,
        timeout: 10000
      }
    ).catch(console.error);
  }
};
