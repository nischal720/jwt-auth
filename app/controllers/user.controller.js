const db = require("../models");
const User = db.user;
const Role = db.role;

exports.allAccess = (req, res) => {
  User.findAll()
    .then((users) => {
      res.status(200).json(users); // Send the users as JSON response
    })
    .catch((err) => {
      console.error("Error fetching users:", err);
      res.status(500).send({ message: "Internal Server Error" });
    });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
