const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5500;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const Clothes = require("./models/Clothes");

// Rota para inicializar ou criar uma roupa (pode ser chamada uma vez)
app.get("/", async (req, res) => {
  try {
    const clothe = await Clothes.create({
      name: "Camisa Básica Oversize",
      price: 99.99,
      description: "Uma camisa básica oversize, casual e confortável",
      image:
        "https://flowysignature.com/cdn/shop/products/CamisetaOversizeFS600_4.jpg?v=1676311731&width=1445",
      gender: "men",
    });
    res.send("Roupa criada com sucesso!");
  } catch (error) {
    console.error("Erro ao criar roupa:", error);
    res.status(500).send("Erro ao criar roupa.");
  }
});

// Rota para obter todas as roupas
app.get("/getClothes/:gender", async (req, res) => {
  const gender = req.params.gender;

  try {
    const clothes = await Clothes.findAll({
      where: {
        gender: gender,
      },
    });
    res.json(clothes); // Não precisa usar JSON.stringify aqui
  } catch (error) {
    console.error("Erro ao buscar roupas:", error);
    res.status(500).send("Erro ao buscar roupas.");
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
