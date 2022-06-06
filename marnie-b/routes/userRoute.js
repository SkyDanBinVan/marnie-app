const { User, Code } = require("../connect");

const express = require("express");
const router = express.Router();

router
.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.post("/foc", async (req, res) => {
    try {
        const user = await User.findOrCreate({ where : { name : req.body.name }, include : Code });
        await user[0].update(req.body);
        await user[0].save();
        await user[0].reload();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.get("/", async (req, res) => {
        try {
            const users = await User.findAll({ include : Code});
            res.status(200).send(users);
        } catch (e) {
            res.status(400).send(e.message);
        }
    })
.get("/:id", async (req, res) => {
    try {
        const user = await User.findOne({where : { name : req.params.id}});
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.get("/id/:id", async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.put("/:id", async (req, res) => {
    try {
        const user = await User.findOne({where : { name : req.params.id}});

        await user.update(req.body);
        await user.save();
        await user.reload();
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.put("/:user_id/:code_id", async (req, res) => {
    try {
        const [user, created] = await User.findOrCreate({where : { name : req.params.user_id}});
        const code = await Code.findOne({where : { code : req.params.code_id}});
        console.log(`${user.name} | ${code}`)
        await user.addCode(code)
        await code.reload();
        res.status(201).send(code);
    } catch (e) {
        res.status(400).send(e.message);
    }
})
.delete("/:id", async (req, res) => {
    try {
        await User.destroy({
            where: {
                name: req.params.id,
            },
        });
        res.status(200).send(`User ${req.params.id} deleted.`);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

module.exports = router;
