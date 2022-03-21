const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://arshan25:Arshan*123@cluster0.vhrj2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const db = "arshan";
const collection = "users";

async function getUserByUserName(username) {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    return await getUserByQuery(client, { username });
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
}

async function getUserByQuery(client, query) {
  return await client.db(db).collection(collection).findOne(query);
}

async function connect() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
  } catch (e) {
    console.error(e);
  }
  return client;
}

exports.getUser = getUserByUserName;
