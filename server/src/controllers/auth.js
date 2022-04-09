const { UserService } = require("../services");
const validation = require("../validation");
const { validateUser } = validation;
const passport = require("passport");
exports.login = (req, res, next) => {
  res.render("auth/login");
};
exports.postLogin = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      req.flash("error", info.message);
      return next(err);
    }
    if (!user) {
      req.flash("error", info.message);
      return res.redirect("/login");
    }
    req.logIn(user, (err) => {
      if (err) {
        req.flash("error", info.message);
        return next(err);
      }
      return res.redirect("/");
    });
  })(req, res, next);
};
exports.register = (req, res, next) => {
  res.render("auth/register");
};
exports.postRegister = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  const { error } = validateUser(req.body);
  if (error) {
    console.log(error.details[0].message);
    req.flash("error", "All fields are required!");
    req.flash("firstname", firstname);
    req.flash("lastname", lastname);
    req.flash("email", email);
    return res.redirect("/auth/register");
  }

  let user = await UserService.findByEmail(email);
  if (user) {
    req.flash("error", "User Already Registered");
    for (let elem in req.body) {
      req.flash(elem, req.body[elem]);
    }
    return res.redirect("/auth/login");
  }
  user = await UserService.createUser(req.body);
  return res.redirect("/login");
};

exports.logout = (req, res) => {
  req.logout();
  res.redirect("/auth/login");
};
