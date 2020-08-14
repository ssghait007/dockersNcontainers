const app = require("express")();
const appid = process.env.APPID;
app.get("/", (req, res) => res.send(`appid: ${appid} home page: says hello!`));
app.get("/hey", (req, res) => res.send(`appid: ${appid} home page: says hey!`));

app.listen(appid, () => console.log(`${appid} is listening on ${appid}`));
