const { User } = require("../models");
class UserService {
  static async findByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (ex) {
      throw new Error(ex.message);
    }
  }
  static async createUser(body) {
    try {
      let user = new User(body);
      user = await user.save();
      return user;
    } catch (ex) {
      throw new Error(ex.message);
    }
  }
}

module.exports = UserService;
