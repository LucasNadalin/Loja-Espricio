const express = require("express");
const router = express.Router();
const {clienteController} = require("../controllers/clienteController");
const {authController} = require("../controllers/authController");

router.post("/clientes/login", authController.clienteLogin);

router.get("/clientes", clienteController.mostrarClientes);

router.post("/clientes", clienteController.cadastrarCliente);

router.put("/clientes/:idCliente", clienteController.atualizarCliente);

router.delete("/clientes/:idCliente", clienteController.deletarCliente);

module.exports = { clienteRoutes: router };