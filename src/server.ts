import "dotenv/config";
import express from "express";
import cors from "cors";
import routes from "./routes/routes";
import bodyParser from "body-parser";

const app = express();

//bodyParser
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(routes);
//rotas ficam depois do express.json pois ele faz a aplicação interpretar json

import "./database/connection";

app.listen(process.env.NODE_PORT, () =>
  console.log(
    `🔥 Server running on host http://localhost:${process.env.NODE_PORT} 🚀 `
  )
);

app.get("/", (req, res) => res.send({ message: "Hello PokeWorld!" }));
