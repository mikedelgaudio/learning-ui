const createClient = require("redis").createClient;
const settings = require("../settings");
const redisConfig = settings.redisConfig;

let client = undefined;
const connectToDb = async () => {
  if (!client) {
    client = createClient({
      url: redisConfig.serverUrl,
    });
    await client.connect();
  }
  if (!client) throw new Error("Could not connect to Redis");
  return client;
};

module.exports = {
  connection: async () => {
    return await connectToDb();
  },
  closeConnection: () => {
    if (!client) return;
    client.quit();
  },
};
