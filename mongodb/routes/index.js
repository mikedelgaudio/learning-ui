const libraryRoutes = require("./library");

const constructorMethod = (app) => {
  app.use("/library", libraryRoutes);

  app.use("*", (req, res) => {
    res.status(404).json({ error: "Not found" });
  });
};

module.exports = constructorMethod;
