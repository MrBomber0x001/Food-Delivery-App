const express = require("express");
const app = express();
const loadRoutes = require("./src/routes/v1/index");
const { connectToDB, setMiddlewares } = require("./src/startup");
setMiddlewares(app, express);
connectToDB();
loadRoutes(app);

app.listen(3000, () => {
  console.log(`🚀 server is running on: http://localhost:${3000}`);
});
