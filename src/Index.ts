import * as Express from "express";
import Config from "./Config";
import { join } from "path";

const app = Express();

app.use(Express.static(Config.public));

app.get("*", (_req, res) => {
    res.sendFile(join(__dirname, "..", Config.public, "index.html"));
})

app.listen(Config.port, () => {
    console.log(`Server is running at port ${Config.port}`);
});