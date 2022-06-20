const { Set } = require("../connect");

const express = require("express");
const router = express.Router();

router
    .post("/", async (req, res) => {
        try {
            const set = await Set.create(req.body);
            res.status(201).send(set);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/", async (req, res) => {
        try {
            const sets = await Set.findAll({});
            res.status(201).send(sets);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:title", async (req, res) => {
        try {
            const set = await Set.findOne({where : { title : req.params.title}});
            res.status(200).send(set);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .put("/:title", async (req, res) => {
        try {
            const set = await Set.findOne({where : { title : req.params.title}});
            await set.update(req.body);
            await set.save();
            await set.reload();
            res.status(200).send(set);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .delete("/:title", async (req, res) => {
        try {
            await Set.destroy({
                where: {
                    title : req.params.title,
                },
            });
            res.status(200).send(`Set ${req.params.title} deleted.`);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;
