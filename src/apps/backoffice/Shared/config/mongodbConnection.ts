import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

export const mongodbClient = new MongoClient(process.env.DB_CONNECTION_URL);
(async () => {
  await mongodbClient.connect();
  console.log('✓ Mongodb started');
})();
export const db = mongodbClient.db(process.env.DB_NAME);
