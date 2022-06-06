const { Command } = require("../connect");

const express = require("express");
const router = express.Router();

router
    .get("/", async (req, res) => {
        try {
            const data = await Command.findAll();
            res.status(200).send(data);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:id", async (req, res) => {
        try {
            const data = await Command.findByPk(req.params.id);
            res.status(200).send(data);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .post("/", async (req, res) => {
        try {
            const data = await Command.create(req.body);
            res.status(201).send(data);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })

module.exports = router;