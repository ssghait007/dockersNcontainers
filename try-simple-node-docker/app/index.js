const app = require("express")();

app.get("/", (req, res) => res.send("hello from node app"));

app.listen(9999, () => console.log("listening on 9999"));
