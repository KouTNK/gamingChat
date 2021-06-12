let id = 0
export default function (io) {
    const chat = io
        .of('/chat_app/chat')
        .on('connection', function (socket) {
            socket.on('check your connection', function () {
                try {
                    socket.emit('success connection', {
                        id: id
                    })
                    id++
                }
                catch (err) {
                    console.error(err)
                }
            })
            socket.on('submit text', function (rec) {
                socket.broadcast.emit('receive text', rec)
                console.log(rec)
            })
        })
}