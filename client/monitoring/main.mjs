import { receiveTextEvent } from '../../modules/chat.mjs'
import { download } from '../../modules/log.mjs'
const socket = io.connect(`http://${location.host}/chat_app/monitoring`)
const history = []
const chat = document.getElementById('chat')

window.addEventListener('load', () => {
    socket.emit('check your connection')
})

socket.on('success connection', function (rec) {
    console.log('success connedtion')
})

socket.on('receive text', function (rec) {
    const fontSizeOfTheTopText = "40px"
    const defaultFontSize = "24px"
    receiveTextEvent(rec.tag, rec.newID, rec.chatText, chat, fontSizeOfTheTopText, defaultFontSize)
})
socket.on('receive message log', function (log) {
    history.push(log)
    console.log(history)
})

document.getElementById("download").onclick = function () {
    download(history,"log.csv")
}