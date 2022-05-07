const express = require("express");
const app = express();
const configRoutes = require("./routes");
app.use(express.json());
configRoutes(app);

const PORT = 3000;

app.listen(PORT, () => {
  try {
    // (async () => {
    //   const db = await connection.connectToDb();
    //   await db.dropDatabase();
    // })();
  } catch (e) {}
  console.log(`Server is running on http://localhost:${PORT}`);
});
