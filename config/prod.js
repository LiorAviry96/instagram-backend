export default {
  dbURL:
    process.env.MONGO_URL ||
    "mongodb+srv://admin:Aviryl96@cluster0.goq3x6h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  dbName: process.env.DB_NAME || "instagram",
};
