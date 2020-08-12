const application = require("../../config/server");

module.exports = (application)=>{
    application.get("/", (req, res)=>{
        res.send("Teste");
    });
}