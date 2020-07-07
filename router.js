const express = require(`express`);
const Arena = require(`bull-arena`);
const GUIConfig = require(`./gui/arena`);
const router = express.Router();

router.use(
  `/`,
  Arena(GUIConfig, {
    disableListen: true,
    basePath: `/arena`
  })
);

module.exports = router;
