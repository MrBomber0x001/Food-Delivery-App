const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    firstname: {
      type: String,
    },
    lastname: { type: String },
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    role: {
      type: String,
      default: "customer",
    },
  },
  { timestamps: true }
);

userSchema.methods.comparePassword = function (password) {
  const user = this;
  return bcrypt.compare(password, user.password);
};

const generateHash = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();
  const hashedPassword = await generateHash(user.password);
  user.password = hashedPassword;
  next();
});

const User = model("users", userSchema);
module.exports = userSchema;
module.exports = User;
