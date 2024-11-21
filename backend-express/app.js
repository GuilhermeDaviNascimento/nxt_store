const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Clothes = require("./models/clothes");

// Rota para obter todas as roupas
app.get("/getClothes/", async (req, res) => {
  try {
    const clothes = await Clothes.findAll();
    res.json(clothes); // Não precisa usar JSON.stringify aqui
  } catch (error) {
    console.error("Erro ao buscar roupas:", error);
    res.status(500).send("Erro ao buscar roupas.");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
