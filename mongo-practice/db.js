// Connect to MongoDB
const MongoClient = require("mongodb").MongoClient;
const ObjectID = require("mongodb").ObjectId;
const dbname = "crud_mongodb";
const url = "mongodb://localhost:27017";
const mongoOptions = { useNewUrlParser: true };

const state = {
  db: null,
};

const connect = (cb) => {
  if (state.db) cb();
  else {
    MongoClient.connect(url, mongoOptions, (err, client) => {
      if (err) {
        cb(err);
      } else {
        state.db = client.db(dbname);
        cb();
      }
    });
  }
};

const getPrimaryKey = (_id) => {
  return ObjectID(_id);
};

const getDb = () => {
  return state.db;
};

module.exports = {
  connect,
  getPrimaryKey,
  getDb,
};
