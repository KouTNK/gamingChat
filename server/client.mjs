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
                monitoring.emit('receive text', rec)
            })
            socket.on('send message log', function (rec) {
                monitoring.emit('receive message log', rec)
            })
        })
    const monitoring = io
        .of('/chat_app/monitoring')
        .on('connection', function (socket) {
            socket.on('check your connection', function () {
                try {
                    socket.emit('success connection')
                }
                catch (err) {
                    console.error(err)
                }
            })
        })
}