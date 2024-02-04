const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:9001",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.sequelize.sync();

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is Running on POR ${PORT}`);
});

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "moderator",
//   });

//   Role.create({
//     id: 3,
//     name: "admin",
//   });
// }
