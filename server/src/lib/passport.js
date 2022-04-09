const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");
const { passportController } = require("../controllers");
const { User } = require("../models");
const { localStrategy } = passportController;

function passportInit() {
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true,
      },
      localStrategy
    )
  );
  passport.serializeUser((user, done) => {
    done(null, user._id); // req.user._id;
    // process.nextTick(() => {
    //   done(null, { id: user._id, username: user.username }); //
    // });
  });
  passport.deserializeUser((id, done) => {
    // deserializeUser authenticate the session which contian user information from the serilizeUser
    User.findById(id, (err, user) => {
      done(err, user);
    });
    // process.nextTick(() => {
    //   return done(null, user);
    // });
  });
}

module.exports = passportInit;
