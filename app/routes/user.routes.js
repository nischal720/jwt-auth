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

  app.get("/api/allUser", controller.allAccess);
  app.get("/api/user", [authjwt.verifyToken], controller.userBoard);
  app.get(
    "api/mod",
    [authjwt.verifyToken, authjwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/admin",
    [authjwt.verifyToken, authjwt.isAdmin],
    controller.adminBoard
  );
};
