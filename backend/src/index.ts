import express from "express";
import { conectarMongo } from "./database/mongo.js";
import voluntarioRouter from "./routes/voluntarioRouter.js";
import carbonoRouter from "./routes/carbonoRouter.js";

const app = express();
app.use(express.json());

// Conecta ao MongoDB
conectarMongo();

// Rotas
app.use("/voluntarios", voluntarioRouter);
app.use("/carbono", carbonoRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
