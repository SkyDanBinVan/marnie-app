// Imports
const express = require("express");
const cors = require("cors")
const { Sequelize } = require("./connect");
// Define const
const app = express();
const port = 8000;
const router = require("./routes/index")
// Use cors protocol
app.use(cors())
// Use Express server
app.use(express.json());
// Listen on port
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
// Define db init
async function start() {
    await Sequelize.sync({
        logging: false
    });
}
// call db init
start()
    .then(() => console.log('Sequelize connected'))
    .catch((e) => console.log(`Caught error: ${e}`));

// Define endpoints
app.use('/', router);