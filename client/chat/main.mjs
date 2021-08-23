import { border, borderStyle, findBorderButton, moveFromTop1, moveFromTop2, moveFromTop3, moveFromMiddle1, moveFromMiddle2, moveFromMiddle3, moveFromBottom1, moveFromBottom2, moveFromBottom3 } from '../../modules/border.mjs'
import { receiveTextEvent, submitTextEvent, getP_ID, createChatText } from '../../modules/chat.mjs'
import { flashScreen } from '../../modules/flash_screen.mjs'
const socket = io.connect(`http://${location.host}/chat_app/chat`)
//ボタンの配置
//top1,top2,top3
//mid1,mid2,mid3
//bot1,bot2,bot3
const buttons = {
    top1: document.getElementById('top1'),
    top2: document.getElementById('top2'),
    top3: document.getElementById('top3'),
    middle1: document.getElementById('middle1'),
    middle2: document.getElementById('middle2'),
    middle3: document.getElementById('middle3'),
    bottom1: document.getElementById('bottom1'),
    bottom2: document.getElementById('bottom2'),
    bottom3: document.getElementById('bottom3'),
}
const chat = document.getElementById('chat')
const buttonsPotision = {
    top1: 'top1',
    top2: 'top2',
    top3: 'top3',
    middle1: 'middle1',
    middle2: 'middle2',
    middle3: 'middle3',
    bottom1: 'bottom1',
    bottom2: 'bottom2',
    bottom3: 'bottom3',
}
let tmpKeydown = []
let username
window.addEventListener('load', () => {
    socket.emit('check your connection')
    border(buttons.middle2, borderStyle.solid)
})
function clickEvent(tag, currentID, newID, text, element, username) {
    const chatText = createChatText(username, text)
    submitTextEvent(tag, newID, chatText, element)
    socket.emit('submit text', { tag, currentID, newID, chatText })
}
//エンターキーを押すとonclickのイベントも発動してしまうため、
//エンターキーの場合はclickEventが発動しないようにした。
//もっといい書き方があるかもしれないので、今後調べる。
function cancelKeydownEvent(tmpKeydown) {
    return tmpKeydown.length !== 0
}
buttons.top1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.top2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.top3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.middle1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.middle2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.middle3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.bottom1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.bottom2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
buttons.bottom3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username)
}
let isSubmit = true
window.addEventListener('keyup', event => {
    //エンターキーを押してすぐ離した場合のみclickEventを発動する。
    //エンターキーを長押しした場合、間違って押した可能性があり、clickEventを発動しないようにした。
    //他のキーと同時押しでエンターキーを押した場合も間違いの可能性があるため、clickEventを発動しないようにした。
    if (event.key === 'Enter' && tmpKeydown.length === 1 && isSubmit) {
        const position = findBorderButton(buttons, borderStyle.solid)
        clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, buttons[position].value, chat, username)
    }
    //キーを離した時、離したキーを配列から削除する。
    tmpKeydown = tmpKeydown.filter(key => key !== event.key)

    //押しているキーがなくなった場合、次にエンターキーを押してすぐ離した場合に送信できるようにする。
    if (tmpKeydown.length === 0) isSubmit = true
})
window.addEventListener('keydown', event => {
    //エンターキーを長押しで押した場合、間違って押した可能性があるため、送信イベントを発動しないようする。
    if (event.key === 'Enter' && isDuplicateKey(tmpKeydown, event)) isSubmit = false
    //他のキーが入力された際にtmpKeydown配列に記憶させるようにした。長押しの場合、keydownイベントが連続で発生するため、記憶しないようにした。
    if (!isDuplicateKey(tmpKeydown, event)) tmpKeydown.push(event.key)
    //エンターキー以外のキーを長押ししている時、送信できないようにする。
    if (event.key !== 'Enter') isSubmit = false
    const position = findBorderButton(buttons, borderStyle.solid)
    if (position === buttonsPotision.top1) moveFromTop1(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.top2) moveFromTop2(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.top3) moveFromTop3(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.middle1) moveFromMiddle1(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.middle2) moveFromMiddle2(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.middle3) moveFromMiddle3(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.bottom1) moveFromBottom1(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.bottom2) moveFromBottom2(buttons, event, tmpKeydown)
    else if (position === buttonsPotision.bottom3) moveFromBottom3(buttons, event, tmpKeydown)
})
function isDuplicateKey(tmpKeydown, event) {
    for (const key of tmpKeydown) {
        if (key === event.key) return true
    }
    return false
}
socket.on('success connection', function (rec) {
    username = rec.id //現在はIDを名前としているが、将来は名前を自由に決められるようにする。
})
socket.on('receive text', function (rec) {
    receiveTextEvent(rec.tag, rec.newID, rec.chatText, chat)
    const flashColor = 'rgb(200,30,30)'
    const defaultColor = 'rgb(30,30,30)'
    const flashTime = 100
    flashScreen(flashColor, defaultColor, flashTime,chat)
})