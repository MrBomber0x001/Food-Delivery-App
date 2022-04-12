const router = require("express").Router();
const { authController } = require("../../controllers");
const { loginPage, login, register, registerPage, logout } = authController;
const passport = require("passport");
const { authMiddleWare } = require("../../middlewares");
const { ensureLoggeIn, ensureLoggedOut } = authMiddleWare;

router
  .route("/login")
  .get(ensureLoggedOut, loginPage)
  .post(
    passport.authenticate("local", {
      successReturnToOrRedirect: "/",
      failureRedirect: "/auth/login",
      failureMessage: true,
    })
  );
router.route("/register").get(ensureLoggedOut, registerPage).post(register);
router.route("/logout").post(ensureLoggeIn, logout);

module.exports = router;
