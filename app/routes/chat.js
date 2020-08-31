const application = require("../../config/server");

module.exports = (application)=>{
    application.post("/chat", (req, res)=>{
        application.app.controllers.chat.iniciarChat(application, req, res);
    });
    application.get("/chat", (req, res)=>{
        //application.app.controllers.chat.iniciarChat(application, req, res);
        application.app.controllers.index.home(application, req, res);
    });
}