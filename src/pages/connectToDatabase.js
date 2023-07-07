import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://zoker_nguyen:zoker666@cluster0.fis8kch.mongodb.net'; // Thay đổi URI này nếu cần thiết
const dbName = 'Exam-System'; // Thay đổi tên database này nếu cần thiết

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient && cachedClient.topology.isConnected()) {
    return cachedClient;
  }

  const client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  const db = client.db(dbName);

  cachedClient = client;

  return client;
}
