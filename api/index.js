const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json({}));
app.use(cors());

app.post("/login", function (req, res) {
    console.log(req.body);
    if (
        req.body.email != "email@email.com.br" ||
        req.body.senha != "qweasd123"
    ) {
        return res.status(400).json({ status: "Email ou senha Invalida !" });
    }
    res.json({ status: "Login efetuado com êxito", code: 200 });
});
app.listen(3000);
