const express = require("express");
const router = express.Router();

const Clothe = require("../models/Clothes.js");

//Retorna todas as roupas
router.get("/", async (req, res) => {
  try {
    const clothes = await Clothe.findAll();
    res.json(clothes); // Não precisa usar JSON.stringify aqui
  } catch (error) {
    console.error("Erro ao buscar roupas:", error);
    res.status(500).send("Erro ao buscar roupas.");
  }
});

//Retorna uma das as roupas
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const clothes = await Clothe.findOne({where: {id: id}});
    res.json(clothes); // Não precisa usar JSON.stringify aqui
  } catch (error) {
    console.error("Erro ao buscar roupas:", error);
    res.status(500).send("Erro ao buscar roupas.");
  }
});

//Cria uma roupa nova
router.post("/", async (req, res) => {
  const { name, price, description, image, gender } = req.body;

  try {
    await Clothe.create({
      name: name,
      price: price,
      description: description,
      image: image,
      gender: gender,
    });
    res.status(201).json({ name: name });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Atualiza por completo a roupa pelo ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, price, description, image, gender } = req.body;

  try {
    const clothe = await Clothe.findByPk(id);
    if (!clothe) {
      return res.status(404).json({ error: "Clothe not found." });
    }
    await clothe.update({
      name: name,
      price: price,
      description: description,
      image: image,
      gender: gender,
    });
    res.status(200).json({ message: "Clothe updated!.", clothe });
  } catch (error) {
    res.status(500).json({ error: "Error while adding the new clothe." });
  }
});

//Deleta a roupa pelo ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const clothe = await Clothe.findByPk(id);
    if (!clothe) {
      return res.status(404).json({ error: "Clothe not found." });
    }
    await clothe.destroy();
    res.status(200).json({ message: "Clothe removed!." });
  } catch (error) {
    res.status(500).json({ error: "Error while removing the new clothe." });
  }
});

module.exports = router;
