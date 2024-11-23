const express = require("express");
const router = express.Router();

const User = require("../models/Users.js");

//Retorna todas as usuarios
router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // Não precisa usar JSON.stringify aqui
  } catch (error) {
    console.error("Erro ao buscar roupas:", error);
    res.status(500).send("Erro ao buscar roupas.");
  }
});

//Cria um novo usuario
router.post("/", async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    await User.create({
      name: name,
      username: username,
      email: email,
      password: password,
    });
    res.status(201).json({ name: name, email: email });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Atualiza por completo o usuario pelo ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, username, email, password } = req.body;

  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    await user.update({
      name: name,
      username: username,
      email: email,
      password: password,
    });
    res.status(200).json({ message: "User updated!.", user });
  } catch (error) {
    res.status(500).json({ error: "Error while adding the new user." });
  }
});

//Deleta o usuario pelo ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }
    await user.destroy();
    res.status(200).json({ message: "User removed!." });
  } catch (error) {
    res.status(500).json({ error: "Error while removing the new user." });
  }
});

module.exports = router;
