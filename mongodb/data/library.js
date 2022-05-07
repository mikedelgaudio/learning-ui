const { ObjectId } = require("mongodb");
const mongoCollections = require("../config/mongoCollections");
const library = mongoCollections.library;
const redisC = require("../config/redis/redisConnection");
const redis = redisC.connection;

async function create(title, author, text) {
  const collection = await library();

  const newRes = {
    title,
    author,
    text,
  };

  const insert = await collection.insertOne(newRes);
  if (insert.insertedCount === 0) throw new Error("Could not add new book.");

  const newId = insert.insertedId;

  return await this.get(newId);
}

async function get(id) {
  const cache = await redis();
  const cachedBook = await cache.get(id.toString());
  if (cachedBook) {
    console.log("Cache hit!");
    console.log(cachedBook);
    return JSON.parse(cachedBook);
  } else {
    console.log("Cache miss.");
    const collection = await library();
    const book = await collection.findOne({ _id: new ObjectId(id) });
    if (!book) throw new Error(`No book found for id ${id}.`);
    // Save to cache
    cache.set(book._id.toString(), JSON.stringify(book));
    book._id = book._id.toString();
    return book;
  }
}

module.exports = {
  create,
  get,
};
