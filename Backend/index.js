require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const routes = require("./routes/routes");
//database connection
connection();

//middlewares
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/", routes);
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}...`));
