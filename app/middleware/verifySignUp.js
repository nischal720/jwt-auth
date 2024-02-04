const db = require("../models");
const ROLES = db.ROLES;
const Users = db.user;

checkDublicateUserNameOrEmail = (req, res, next) => {
  //User name
  Users.findOne({
    where: {
      userName: req.body.userName,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "Username is already in use!" });
    }

    // If no duplicates found, move to the next middleware
    next();
  });

  //Email
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "Username is already in use!" });
    }

    // If no duplicates found, move to the next middleware
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        return res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i],
        });
      }
    }
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted,
};

module.exports = verifySignUp;
