import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 8080;

app.listen(port);
console.log(`server active on port ${port}`);
