const passport = require("passport");
const db = require("./db.js");
const TwitterStrategy = require("passport-twitter").Strategy;
require("dotenv").config();

function getLargeProfileImage(url) {
  if (!url) return null;
  return url.replace("_normal.", ".");
}

passport.use(
  new TwitterStrategy(
    {
      consumerKey: process.env.TWITTER_CONSUMER_KEY,
      consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
      callbackURL: "http://localhost:3000/auth/twitter/callback",
    },
    function (token, tokenSecret, profile, cb) {

      db("users")
        .where({ twitterId: profile.id })
        .first()
        .then((user) => {
          if (user) {
            return cb(null, user);
          } else {
            return db("users")
              .insert({
                twitterId: profile.id,
                name: profile.displayName,
                photo: getLargeProfileImage(profile._json.profile_image_url),
              })
              .then((ids) => {
                return cb(null, {
                  twitterId: profile.id,
                  id: ids[0],
                  name: profile.displayName,
                  photo: getLargeProfileImage(profile._json.profile_image_url),
                });
              });
          }
        })
        .catch((err) => {
          return cb(err);
        });
    }
  )
);

passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (user, cb) {
    db("users")
      .where({ twitterId: user.twitterId })
      .first()
      .then((user) => {
        cb(null, user);
      })
      .catch((err) => {
        cb(err);
      });
});

module.exports = passport;
