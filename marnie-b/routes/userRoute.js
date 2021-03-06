const { User, Code } = require("../connect");
const auth = require("../middleware/auth")
const express = require("express");
const router = express.Router();

router
    .post("/", auth, async (req, res) => {
        try {
            const user = await User.findOrCreate({
                where: { name: req.body.name },
                include: Code,
            });
            await user[0].update(req.body);
            await user[0].save();
            await user[0].reload();
            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/:name", async (req, res) => {
        try {
            const user = await User.findOne({
                where: { name: req.params.name },
                include: Code,
                attributes: ['name', "points"]
            });
            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .get("/", async (req, res) => {
        try {
            const users = await User.findAll({ attributes: ['name', "points"] });
            res.status(200).send(users);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .put("/:name", auth, async (req, res) => {
        try {
            const user = await User.findOne({
                where: { name: req.params.name },
            });
            await user.update(req.body);
            await user.save();
            await user.reload();
            res.status(200).send(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .put("/:name/:code", auth, async (req, res) => {
        try {
            const [user, created] = await User.findOrCreate({
                where: { name: req.params.name },
            });
            const code = await Code.findOne({
                where: { code: req.params.code },
            });
            await user.addCode(code);
            await user.reload();
            res.status(201).send(user);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
    .delete("/:name", auth, async (req, res) => {
        try {
            await User.destroy({
                where: {
                    name: req.params.name,
                },
            });
            res.status(200).send(`User ${req.params.name} deleted.`);
        } catch (e) {
            res.status(400).send(e.message);
        }
    });

module.exports = router;
