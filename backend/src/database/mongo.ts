import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

export async function conectarMongo() {
  try {
    const uri = process.env.MONGO_URI as string;
    if (!uri) {
      throw new Error("❌ String de conexão não encontrada no .env");
    }

    await mongoose.connect(uri);
    console.log("✅ Conectado ao MongoDB");
  } catch (error) {
    console.error("❌ Erro ao conectar ao MongoDB:", error);
    process.exit(1);
  }
}
