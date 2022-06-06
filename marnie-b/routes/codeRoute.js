const { Code, Set } = require("../connect");

const express = require("express");
const router = express.Router();

router
    .post("/", async (req, res) => {
        try {
            const body = req.body;
            if (body.set === undefined) {
                throw new Error('Must have "set" attribute.');
            } else {
                const setTitle = body.set;
                delete body.set;
                let [set, created] = await Set.findOrCreate({ where : { title : setTitle}});
                const code = await Code.create(body);
                await set.addCode(code);
                await code.reload();
                res.status(201).send(code);
            }
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/", async (req, res) => {
        try {
            const codes = await Code.findAll({});
            res.status(200).send(codes);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/empty", async (req, res) => {
        try {
            const codes = await Code.findAll({where : {UserName : null, isSent : false }});
            res.status(200).send(codes);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:id/pending", async (req, res) => {
        try {
            const codes = await Code.findAll({where : {UserName : req.params.id, isSent : false }});
            res.status(200).send(codes);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:id/own", async (req, res) => {
        try {
            const codes = await Code.findAll({where : { UserName : req.params.id }});
            res.status(200).send(codes);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:id", async (req, res) => {
        try {
            const code = await Code.findOne({where : { code : req.params.id}});
            res.status(200).send(code);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .put("/:id", async (req, res) => {
        try {
            const code = await Code.findOne({where : { code : req.params.id}});

            await code.update(req.body);
            await code.save();
            await code.reload();
            res.status(200).send(code);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .delete("/:id", async (req, res) => {
        try {
            await Code.destroy({
                where: {
                    code: req.params.id,
                },
            });
            res.status(200).send(`Code ${req.params.id} deleted.`);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;
