import { border, borderStyle, findBorderButton, moveFromTop1, moveFromTop2, moveFromTop3, moveFromMiddle1, moveFromMiddle2, moveFromMiddle3, moveFromBottom1, moveFromBottom2, moveFromBottom3 } from '../../modules/border.mjs'
import { receiveTextEvent, submitTextEvent, getP_ID, createChatText } from '../../modules/chat.mjs'
import { flashScreenAndRemoveElement, createFlashScreenOfElement } from '../../modules/flash_screen.mjs'
import { registerUserName } from '../../modules/user.mjs'
import { takeMessageLog, getTimeStamp } from '../../modules/log.mjs'
import { getDeviceType } from '../../modules/responsive.mjs'
// import { takeMessageLog } from '../../modules/log.mjs'
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
chat.addEventListener('touchstart', function (event) {
    falseContentEditable(event.target, buttons)
    falseIsContentEditableTargetID()
})
const buttonsDiv = document.getElementById('buttons')
buttonsDiv.addEventListener('touchmove', logSwipe)
buttonsDiv.addEventListener('touchstart', logSwipeStart)
buttonsDiv.addEventListener('touchend', logSwipeEnd)
let startX
let endX
function logSwipeStart(event) {
    console.log("touchstart logswipe")
    startX = event.touches[0].pageX
    endX = undefined
    falseContentEditable(event.target, buttons)
}
function logSwipe(event) {
    event.preventDefault()
    endX = event.touches[0].pageX
}
const chatSet = {
    default: "default",
    left: "left",
    right: "right"
}
let currentChatSet = chatSet.default
function logSwipeEnd(event) {
    // console.log('endX:' + endX, 'startX:' + startX, 'endX-startX:' + (endX - startX))
    if (-70 < (endX - startX)) {
        if (chatSet.default === currentChatSet) {
            currentChatSet = chatSet.left
            buttons.top1.innerHTML = 'こんにちは'
            buttons.top1.value = 'こんにちは'
            buttons.top2.innerHTML = 'グッド！'
            buttons.top2.value = 'グッド！'
            buttons.top3.innerHTML = 'どんまい！'
            buttons.top3.value = 'どんまい！'
            buttons.middle1.innerHTML = 'くそ！'
            buttons.middle1.value = 'くそ！'
            buttons.middle2.innerHTML = '敵チキンかよ！'
            buttons.middle2.value = '敵チキンかよ！'
            buttons.middle3.innerHTML = '助かった！'
            buttons.middle3.value = '助かった！'
            buttons.bottom1.innerHTML = '草生えたw'
            buttons.bottom1.value = '草生えたw'
            buttons.bottom2.innerHTML = 'うるせーよ'
            buttons.bottom2.value = 'うるせーよ'
            buttons.bottom3.innerHTML = '黙れ！'
            buttons.bottom3.value = '黙れ！'
        }
        else if (chatSet.right === currentChatSet) {
            currentChatSet = chatSet.default
            // buttons.top1.innerHTML = '攻めるぞ！'
            // buttons.top1.value = '攻めるぞ！'
            // buttons.top2.innerHTML = 'ロー！'
            // buttons.top2.value = 'ロー！'
            // buttons.top3.innerHTML = '攻めて！'
            // buttons.top3.value = '攻めて！'
            // buttons.middle1.innerHTML = '待つぞ！'
            // buttons.middle1.value = '待つぞ！'
            // buttons.middle2.innerHTML = '漁夫だ！'
            // buttons.middle2.value = '漁夫だ！'
            // buttons.middle3.innerHTML = '逃げよう！'
            // buttons.middle3.value = '逃げよう！'
            // buttons.bottom1.innerHTML = '回復してる！'
            // buttons.bottom1.value = '回復してる！'
            // buttons.bottom2.innerHTML = '見張って！'
            // buttons.bottom2.value = '見張って！'
            // buttons.bottom3.innerHTML = '俺を盾にしろ！'
            // buttons.bottom3.value = '俺を盾にしろ！'
            buttons.top1.innerHTML = '家を作る！'
            buttons.top1.value = '家を作る！'
            buttons.top2.innerHTML = '木を集める！'
            buttons.top2.value = '木を集める！'
            buttons.top3.innerHTML = '石を集める！'
            buttons.top3.value = '石を集める！'
            buttons.middle1.innerHTML = '敵を倒す！'
            buttons.middle1.value = '敵を倒す！'
            buttons.middle2.innerHTML = '助けて！死にそう！'
            buttons.middle2.value = '助けて！死にそう！'
            buttons.middle3.innerHTML = 'X軸、Y軸、Z軸教えて！'
            buttons.middle3.value = 'X軸、Y軸、Z軸教えて！'
            buttons.bottom1.innerHTML = '迷った！'
            buttons.bottom1.value = '迷った！'
            buttons.bottom2.innerHTML = '修理する！'
            buttons.bottom2.value = '修理する！'
            buttons.bottom3.innerHTML = '一緒に来て！'
            buttons.bottom3.value = '一緒に来て！'
        }
    }
    else if (70 > endX - startX) {
        if (chatSet.default === currentChatSet) {
            currentChatSet = chatSet.right
            buttons.top1.innerHTML = '粘土集める！'
            buttons.top1.value = '粘土集める！'
            buttons.top2.innerHTML = '寝よう！'
            buttons.top2.value = '寝よう！'
            buttons.top3.innerHTML = '雪のとこに来て！'
            buttons.top3.value = '雪のとこに来て！'
            buttons.middle1.innerHTML = '馬に乗って出かける！'
            buttons.middle1.value = '馬に乗って出かける！'
            buttons.middle2.innerHTML = '休憩する！'
            buttons.middle2.value = '休憩する！'
            buttons.middle3.innerHTML = '難易度をピースに変えた！'
            buttons.middle3.value = '難易度をピースに変えた！'
            buttons.bottom1.innerHTML = '難易度をハードに変えた！'
            buttons.bottom1.value = '難易度をハードに変えた！'
            buttons.bottom2.innerHTML = 'チェストを置く！'
            buttons.bottom2.value = 'チェストを置く！'
            buttons.bottom3.innerHTML = '倒すな！'
            buttons.bottom3.value = '倒すな！'
            // buttons.top1.innerHTML = '挟み撃ちしよう'
            // buttons.top1.value = '挟み撃ちしよう'
            // buttons.top2.innerHTML = '3秒後にみんな攻めよう'
            // buttons.top2.value = '3秒後にみんな攻めよう'
            // buttons.top3.innerHTML = '高所でこもろう'
            // buttons.top3.value = '高所でこもろう'
            // buttons.middle1.innerHTML = '誰か残って！前に出る！'
            // buttons.middle1.value = '誰か残って！前に出る！'
            // buttons.middle2.innerHTML = '誰か残って！探索する！'
            // buttons.middle2.value = '誰か残って！探索する！'
            // buttons.middle3.innerHTML = '俺ここにいるから探索して'
            // buttons.middle3.value = '俺ここにいるから探索して'
            // buttons.bottom1.innerHTML = '青の人ウルト使って！'
            // buttons.bottom1.value = '青の人ウルト使って！'
            // buttons.bottom2.innerHTML = '黄の人ウルト使って！'
            // buttons.bottom2.value = '黄の人ウルト使って！'
            // buttons.bottom3.innerHTML = '緑の人ウルト使って！'
            // buttons.bottom3.value = '緑の人ウルト使って！'
        }
        else if (chatSet.left === currentChatSet) {
            currentChatSet = chatSet.default
            buttons.top1.innerHTML = '家を作る！'
            buttons.top1.value = '家を作る！'
            buttons.top2.innerHTML = '木を集める！'
            buttons.top2.value = '木を集める！'
            buttons.top3.innerHTML = '石を集める！'
            buttons.top3.value = '石を集める！'
            buttons.middle1.innerHTML = '敵を倒す！'
            buttons.middle1.value = '敵を倒す！'
            buttons.middle2.innerHTML = '助けて！死にそう！'
            buttons.middle2.value = '助けて！死にそう！'
            buttons.middle3.innerHTML = 'X軸、Y軸、Z軸教えて！'
            buttons.middle3.value = 'X軸、Y軸、Z軸教えて！'
            buttons.bottom1.innerHTML = '迷った！'
            buttons.bottom1.value = '迷った！'
            buttons.bottom2.innerHTML = '修理する！'
            buttons.bottom2.value = '修理する！'
            buttons.bottom3.innerHTML = '一緒に来て！'
            buttons.bottom3.value = '一緒に来て！'
            // buttons.top1.innerHTML = '攻めるぞ！'
            // buttons.top1.value = '攻めるぞ！'
            // buttons.top2.innerHTML = 'ロー！'
            // buttons.top2.value = 'ロー！'
            // buttons.top3.innerHTML = '攻めて！'
            // buttons.top3.value = '攻めて！'
            // buttons.middle1.innerHTML = '待つぞ！'
            // buttons.middle1.value = '待つぞ！'
            // buttons.middle2.innerHTML = '漁夫だ！'
            // buttons.middle2.value = '漁夫だ！'
            // buttons.middle3.innerHTML = '逃げよう！'
            // buttons.middle3.value = '逃げよう！'
            // buttons.bottom1.innerHTML = '回復してる！'
            // buttons.bottom1.value = '回復してる！'
            // buttons.bottom2.innerHTML = '見張って！'
            // buttons.bottom2.value = '見張って！'
            // buttons.bottom3.innerHTML = '俺を盾にしろ！'
            // buttons.bottom3.value = '俺を盾にしろ！'
        }
    }
}

let longTouchTimer, longTouchCount
function isLongTouchStart(event) {
    longTouchCount = 0
    longTouchTimer = setInterval(() => {
        longTouchCount++
    }, 10)
    console.log("touch start")
}
let IsTrueContentEditableTargetID
function isLongTouchEnd(event) {
    clearInterval(longTouchTimer)
    if (longTouchCount >= 50) {
        event.target.contentEditable = "true"
        IsTrueContentEditableTargetID = event.target.id
    }
    falseContentEditable(event.target, buttons, IsTrueContentEditableTargetID)

    console.log("touch end", longTouchCount)
}

buttons.top1.addEventListener('touchstart', isLongTouchStart)
buttons.top2.addEventListener('touchstart', isLongTouchStart)
buttons.top3.addEventListener('touchstart', isLongTouchStart)
buttons.middle1.addEventListener('touchstart', isLongTouchStart)
buttons.middle2.addEventListener('touchstart', isLongTouchStart)
buttons.middle3.addEventListener('touchstart', isLongTouchStart)
buttons.bottom1.addEventListener('touchstart', isLongTouchStart)
buttons.bottom2.addEventListener('touchstart', isLongTouchStart)
buttons.bottom3.addEventListener('touchstart', isLongTouchStart)
buttons.top1.addEventListener('touchend', isLongTouchEnd)
buttons.top2.addEventListener('touchend', isLongTouchEnd)
buttons.top3.addEventListener('touchend', isLongTouchEnd)
buttons.middle1.addEventListener('touchend', isLongTouchEnd)
buttons.middle2.addEventListener('touchend', isLongTouchEnd)
buttons.middle3.addEventListener('touchend', isLongTouchEnd)
buttons.bottom1.addEventListener('touchend', isLongTouchEnd)
buttons.bottom2.addEventListener('touchend', isLongTouchEnd)
buttons.bottom3.addEventListener('touchend', isLongTouchEnd)
buttons.top1.addEventListener('keyup', function (event) {
    if (event.key === "Enter") {
        console.log("Enter")
    }
})

function falseContentEditable(target, buttons) {
    if (target !== buttons.top1) buttons.top1.contentEditable = "false"
    if (target !== buttons.top2) buttons.top2.contentEditable = "false"
    if (target !== buttons.top3) buttons.top3.contentEditable = "false"
    if (target !== buttons.middle1) buttons.middle1.contentEditable = "false"
    if (target !== buttons.middle2) buttons.middle2.contentEditable = "false"
    if (target !== buttons.middle3) buttons.middle3.contentEditable = "false"
    if (target !== buttons.bottom1) buttons.bottom1.contentEditable = "false"
    if (target !== buttons.bottom2) buttons.bottom2.contentEditable = "false"
    if (target !== buttons.bottom3) buttons.bottom3.contentEditable = "false"
}
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
// const fontSizeOfTheTopText = "40px"
// const defaultFontSize = "24px"
const elementId = {
    flashScreen: "flash_screen"
}
const className = {
    chatFrame: "chat_frame",
    username: "username",
    chatText: "chat_text",
    flashScreen: "flash_screen",
    textarea: "textarea",
    submitButton: "submitButton"
}
const MY_TEXT_BACKGROUND_COLOR = "rgb(38, 50, 56)"
window.addEventListener('load', () => {
    socket.emit('check your connection')
    border(buttons.middle2, borderStyle.solid)
})
const falseIsContentEditableTargetID = () => IsTrueContentEditableTargetID = ""
function clickEvent(tag, currentID, newID, text, element, username, position, backgroundColor) {
    if (IsTrueContentEditableTargetID === position) {
        console.log("clickEvent", IsTrueContentEditableTargetID)
        return
    }
    else falseIsContentEditableTargetID
    const chatText = createChatText(username, className.username, text, className.chatText)
    submitTextEvent(tag, newID, chatText, element, className.chatFrame, backgroundColor)
    socket.emit('submit text', { tag, currentID, newID, chatText })
    const log = takeMessageLog(getTimeStamp(), username, text, "Click", position)
    socket.emit('send message log', log)
}

document.getElementById(className.submitButton).onclick = (event) => {
    const textarea = document.getElementById(className.textarea)
    const inputText = textarea.innerText
    submitInputTextForTextarea('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, inputText, chat, username, MY_TEXT_BACKGROUND_COLOR)
    textarea.innerText = ""
}

function submitInputTextForTextarea(tag, currentID, newID, text, element, username, backgroundColor) {
    const chatText = createChatText(username, className.username, text, className.chatText)
    submitTextEvent(tag, newID, chatText, element, className.chatFrame, backgroundColor)
    socket.emit('submit text', { tag, currentID, newID, chatText })
    const position = "input"
    const log = takeMessageLog(getTimeStamp(), username, text, "Click", position)
    socket.emit('send message log', log)
}

document.getElementById(className.textarea).addEventListener("focusin", function (event) {
    console.log(event.target)
    if (getDeviceType() === "smartphone") {

    }
})
document.getElementById(className.textarea).addEventListener("focusout", function (event) {
    console.log(event.target)
    if (getDeviceType() === "smartphone") {

    }
})
//エンターキーを押すとonclickのイベントも発動してしまうため、
//エンターキーの場合はclickEventが発動しないようにした。
//もっといい書き方があるかもしれないので、今後調べる。
function cancelKeydownEvent(tmpKeydown) {
    return tmpKeydown.length !== 0
}
buttons.top1.onclick = (event) => {
    console.log("onclick")
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.top1, MY_TEXT_BACKGROUND_COLOR)
}
buttons.top2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.top2, MY_TEXT_BACKGROUND_COLOR)
}
buttons.top3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.top3, MY_TEXT_BACKGROUND_COLOR)
}
buttons.middle1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.middle1, MY_TEXT_BACKGROUND_COLOR)
}
buttons.middle2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.middle2, MY_TEXT_BACKGROUND_COLOR)
}
buttons.middle3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.middle3, MY_TEXT_BACKGROUND_COLOR)
}
buttons.bottom1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.bottom1, MY_TEXT_BACKGROUND_COLOR)
}
buttons.bottom2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.bottom2, MY_TEXT_BACKGROUND_COLOR)
}
buttons.bottom3.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, event.target.value, chat, username, buttonsPotision.bottom3, MY_TEXT_BACKGROUND_COLOR)
}
let isSubmit = true
window.addEventListener('keyup', event => {
    //エンターキーを押してすぐ離した場合のみclickEventを発動する。
    //エンターキーを長押しした場合、間違って押した可能性があり、clickEventを発動しないようにした。
    //他のキーと同時押しでエンターキーを押した場合も間違いの可能性があるため、clickEventを発動しないようにした。
    if (event.key === 'Enter' && tmpKeydown.length === 1 && isSubmit && event.target.id !== "textarea" && !IsTrueContentEditableTargetID) {
        const position = findBorderButton(buttons, borderStyle.solid)
        clickEvent('p', `p${getP_ID() - 1}`, `p${getP_ID()}`, buttons[position].value, chat, username, position, MY_TEXT_BACKGROUND_COLOR)
    }
    else if (event.key === 'Enter' && tmpKeydown.length === 1 && isSubmit && event.target.id !== "textarea" && IsTrueContentEditableTargetID) {
        const button = document.getElementById(IsTrueContentEditableTargetID)
        button.value = button.innerText
        falseIsContentEditableTargetID()
        button.contentEditable = false
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
    if (isNotEventTargetId(event, "textarea") && !IsTrueContentEditableTargetID) {
        if (position === buttonsPotision.top1) moveFromTop1(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.top2) moveFromTop2(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.top3) moveFromTop3(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.middle1) moveFromMiddle1(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.middle2) moveFromMiddle2(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.middle3) moveFromMiddle3(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.bottom1) moveFromBottom1(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.bottom2) moveFromBottom2(buttons, event, tmpKeydown)
        else if (position === buttonsPotision.bottom3) moveFromBottom3(buttons, event, tmpKeydown)
    }
    const text = document.getElementById(position).innerText
    const log = takeMessageLog(getTimeStamp(), username, text, event.key, position)
    socket.emit('send message log', log)
})
function isNotEventTargetId(event, id) {
    return event.target.id !== id
}
function isDuplicateKey(tmpKeydown, event) {
    for (const key of tmpKeydown) {
        if (key === event.key) return true
    }
    return false
}
socket.on('success connection', function (rec) {
    username = registerUserName() //現在はIDを名前としているが、将来は名前を自由に決められるようにする。
})
socket.on('receive text', function (rec) {
    // document.getElementById('flash_screen').remove()
    receiveTextEvent(rec.tag, rec.newID, rec.chatText, chat, className.chatFrame)
    const flashColor = 'rgb(200,30,30)'
    const flashTime = 100
    const flashScreenOfElement = createFlashScreenOfElement('div', elementId.flashScreen, className.flashScreen, chat)
    flashScreenAndRemoveElement(flashColor, flashTime, flashScreenOfElement)
})