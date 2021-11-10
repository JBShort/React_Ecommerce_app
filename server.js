const express = require("express")
const cors = require("cors")
const app = express();
const port = 8000;

app.use(cors(), express.json(), express.urlencoded({ extended: true }));

// include middleware here

app.listen(port, () => console.log(`The server is all fired up on port UwU ${port}`));