/* importar as configuracoes do servidor */
const application = require("./config/server");

/* parametrizar a porta de escuta */
const server = application.listen(80, () => {
    console.log("Servidor online");
});

/* importar socket.io e ouvir na mesma porta */
const io = require('socket.io').listen(server);

/* Seta variavel global */
application.set('io', io);

/* Criar a conexao por websocket */
io.on('connection', (socket) => {
    console.log('Usuário conectou!');

    socket.on('disconnect', () => {
        console.log('Usuário desconectou!');
    });

    socket.on('msgParaServidor', (data) => {

        /* dialogo */
        socket.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        socket.broadcast.emit(
            'msgParaCliente',
            { apelido: data.apelido, mensagem: data.mensagem }
        );

        /* participantes */
        if (parseInt(data.apelido_atualizado_nos_clientes) == 0) {
            socket.emit(
                'participantesParaClientes',
                { apelido: data.apelido, mensagem: data.mensagem }
            );

            socket.broadcast.emit(
                'participantesParaClientes',
                { apelido: data.apelido }
            );
        }
    });
});