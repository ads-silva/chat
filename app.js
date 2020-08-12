/* importar as configuracoes do servidor */
const application = require("./config/server");

/*parametrizar a porta de escuta */
application.listen(80, () => {
    console.log("Servidor online");
});