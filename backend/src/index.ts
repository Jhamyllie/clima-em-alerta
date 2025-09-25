import express from "express";
import carbonoRouter from "./routes/carbonoRouter.js";


const app = express();
app.use(express.json());

app.use("/carbono", carbonoRouter);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000 🚀");
});
