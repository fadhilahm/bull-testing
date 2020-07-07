const EventEmitter = require(`events`);
EventEmitter.defaultMaxListeners = 50;

const { LoggingDataProcessor } = require(`../tasks/file/processor`);
const { loggingDataQueue } = require(`.`);

console.log(`Queueing process underway ~~`);

const activeQueues = [
  {
    queue: loggingDataQueue,
    processor: LoggingDataProcessor
  }
];

activeQueues.forEach(({ queue, processor }) => {
  queue.on(`progress`, (job, progress) => {
    console.log(`~~ Job is ${progress} % ~~`);
  });
  queue.on(`completed`, (job, result) => {
    console.log(`THE PROCESSED PICTURE HAS BEEN DONE\n`, result);
  });
  queue.process(processor);
});
