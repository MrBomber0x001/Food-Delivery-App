const router = require("express").Router();
const { authController } = require("../../controllers");
const { login, postLogin, postRegister, register, logout } = authController;
const passport = require("passport");
const { authMiddleWare } = require("../../middlewares");
const { ensureLoggeIn, ensureLoggedOut } = authMiddleWare;

router
  .route("/login")
  .get(ensureLoggedOut, login)
  .post(
    passport.authenticate("local", {
      successReturnToOrRedirect: "/",
      failureRedirect: "/auth/login",
      failureMessage: true,
    })
  );
router.route("/register").get(ensureLoggedOut, register).post(postRegister);
router.route("/logout").post(logout);

module.exports = router;
