const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const db = require("./config/db");
const passport = require("./config/passport");
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const port = process.env.PORT || 3000;

const authRoutes = require('./routes/auth');
const indexRoutes = require('./routes/index');

app.use(authRoutes);
app.use(indexRoutes);

app.listen(port, () => {
  console.log(`App está rodando na porta ${port}`);
});
