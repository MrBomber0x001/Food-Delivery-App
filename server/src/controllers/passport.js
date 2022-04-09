const { User } = require("../models");

exports.localStrategy = async (req, email, password, done) => {
  const user = await User.findOne({ email });
  if (!user) {
    return done(null, false, { message: "No user with this email" });
  }
  const isValid = user.comparePassword(password);
  if (!isValid) {
    return done(null, false, { message: "Wrong credentials" });
  }
  console.log("logged in");
  return done(null, user, { message: "Logged in successfully" });
};
