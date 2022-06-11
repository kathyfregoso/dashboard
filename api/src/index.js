import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes.js";

const app = express();

// get the data from a request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// register routes
app.use(routes);

// insert get and post request routes here
// add routes for queries

const port = 8080;

app.listen(port);
console.log(`server active on port ${port}`);
