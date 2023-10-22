import express from "express";
const app = express();
import cors from "cors";
import { login, register } from "./utils/login.js"

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.post("/api/login", (req, res) => {
    let loginResult = login(req.body.username, req.body.password);
    res.send({ data: loginResult });
});

app.post("/api/register", (req, res) => {
    let registerResult = register(req.body.username, req.body.password);
    res.send({ data: registerResult });
});

const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Server failed to start:", error);
        return;
    }
    console.log("Server started at port:", PORT);
});
