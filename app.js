// Libraries
const express = require(`express`);
require(`dotenv`).config();
const app = express();
// eslint-disable-next-line no-undef
const port = process.env.PORT;

// Local Files
const { addLoggingDataQueue } = require(`./tasks/file/queue`);
const router = require(`./router`);
app.use(`/`, router);

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
app.get(`/add/:data`, (req, res) => {
  const { data } = req.params;
  addLoggingDataQueue(data);
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

module.exports = app;
