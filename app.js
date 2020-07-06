// Libraries
const express = require(`express`);
const Redis = require(`ioredis`);
const redis = new Redis();
require(`dotenv`).config();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT
app.use(express.json());
// Move the instatiation HERE
const Bull = require(`bull`);
const mySecondQueue = new Bull(`my_second_queue`);

/*
   /                       \
 /X/                       \X\
|XX\         _____         /XX|
|XXX\     _/       \_     /XXX|___________
 \XXXXXXX             XXXXXXX/            \\\
   \XXXX    /     \    XXXXX/                \\\
        |   0     0   |                         \
         |           |                           \
          \         /                            |______//
           \       /                             |
            | O_O | \                            |
             \ _ /   \________________           |
                        | |  | |      \         /
  No Bullshit,          / |  / |       \______/
   Please...            \ |  \ |        \ |  \ |
                      __| |__| |      __| |__| |
                      |___||___|      |___||___|
*/

app.get(`/`, async (req, res) => {
    // STEP 1. INSTANTIATE NEW BULL INSTANCE
    const myFirstQueue = new Bull(`my-first-queue`);
    // STEP 2. PRODUCERS IS THE ONE THAT ADD JOBS TO THE QUEUE
    // const job = await myFirstQueue.add({
    //     foo: `bar`
    // });
    // STEP 3. CONSUMER IS THE ONE THAT DO THE JOB
    myFirstQueue.process(async (job) => {
        console.log(new Date());
        console.log(job.data);
    });
    res.status(200).json(`Finished`);
});

app.get('/add/:data', async (req, res) => {
    const { data } = req.params;
    await mySecondQueue.add({
        foo: `bar`,
        date: new Date,
        data
    });
    res.status(200).json(`Finished adding a new job on ${new Date} with ${data} as THE data`);
});

app.get(`/process`, async (_, res) => {
    mySecondQueue.process((job) => {
        let progress = 0;
        for (let i = 0; i < 100; i++) {
            console.log(job.data);
            progress +=10;
            job.progress(progress);
            console.log(`JOB PROGRESS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n`, job.progress());
        }
        console.log(job.data);
        return `fôöòóœøōõbar ` + job.data.data;
    })
    res.status(200).json(`Finished processing pending jobs on ${new Date}.`);
});

mySecondQueue.on(`global:completed`, (jobId, result) => {
    console.log(`This is the job.data from the job.data: \n`, jobId);
    console.log(`Job completed with a result of: \n`, result);
});
/*
   /                       \
 /X/                       \X\
|XX\         _____         /XX|
|XXX\     _/       \_     /XXX|___________
 \XXXXXXX             XXXXXXX/            \\\
   \XXXX    /     \    XXXXX/                \\\
        |   0     0   |                         \
         |           |                           \
          \         /                            |______//
           \       /                             |
            | O_O | \                            |
             \ _ /   \________________           |
                        | |  | |      \         /
  No Bullshit,          / |  / |       \______/
   Please...            \ |  \ |        \ |  \ |
                      __| |__| |      __| |__| |
                      |___||___|      |___||___|
*/

app.listen(port, () => console.log(`App is listening on port: ${port}`));
