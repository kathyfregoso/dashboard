import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes.js";
import db from "./queries.js";

const app = express();

app.use(cors());
// get the data from a request
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("build"));

// register routes
app.use(routes);

// insert get and post request routes here
// add routes for queries
app.get("/customers", db.getCustomers);
app.post("/customers", db.addCustomer);

const port = process.env.PORT || 8080;

app.listen(port);
console.log(`server active on port ${port}`);
