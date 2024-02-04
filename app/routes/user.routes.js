const { authjwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/test/all", controller.allAccess);
  app.get("/test/user", [authjwt.verifyToken], controller.userBoard);
  app.get(
    "/test/mod",
    [authjwt.verifyToken, authjwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/test/admin",
    [authjwt.verifyToken, authjwt.isAdmin],
    controller.adminBoard
  );
};
