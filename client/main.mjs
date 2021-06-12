const socket = io.connect(`http://${location.host}/chat_app/chat`)
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
const borderStyle = {
    solid: 'solid',
    none: 'none'
}
let tmpKeydown = []
let p_id = 0
let username
window.addEventListener('load', () => {
    socket.emit('check your connection')
    border(buttons.middle2, borderStyle.solid)
})
buttons.top1.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.top2.onclick = (event) => {
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.top3.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.middle1.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.middle2.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.middle3.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.bottom1.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.bottom2.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
buttons.bottom3.onclick = (event) => {
    console.log('abcd', tmpKeydown)
    if (cancelKeydownEvent(tmpKeydown)) return
    else clickEvent('p', `p${p_id - 1}`, `p${p_id}`, event.target.value, chat, username)
}
let isSubmit = true
window.addEventListener('keyup', event => {
    if (event.key === 'Enter' && tmpKeydown.length === 1 && isSubmit) {
        const position = findBorderButton(buttons, borderStyle.solid)
        clickEvent('p', `p${p_id - 1}`, `p${p_id}`, buttons[position].value, chat, username)
        chat.style.backgroundColor = 'rgb(30,30,200)'
        setTimeout(function () {
            chat.style.backgroundColor = 'rgb(30, 30, 30)'
        }, 100)
    }
    tmpKeydown = tmpKeydown.filter(key => key !== event.key)
    if (tmpKeydown.length === 0) isSubmit = true
})
window.addEventListener('keydown', event => {
    if (event.key === 'Enter' && isDuplicateKey(tmpKeydown, event)) isSubmit = false
    if (!isDuplicateKey(tmpKeydown, event)) tmpKeydown.push(event.key)
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
socket.on('success connection', function (rec) {
    console.log(rec)
    username = rec.id
})
socket.on('receive text', function (rec) {
    console.log(rec)
    receiveTextEvent(rec.tag, rec.currentID, rec.newID, rec.chatText, chat)
    chat.style.backgroundColor = 'rgb(200,30,30)'
        setTimeout(function () {
            chat.style.backgroundColor = 'rgb(30, 30, 30)'
        }, 100)
})
function isDuplicateKey(tmpKeydown, event) {
    for (const key of tmpKeydown) {
        if (key === event.key) return true
    }
    return false
}
function cancelKeydownEvent(tmpKeydown) {
    return tmpKeydown.length !== 0
}
function clickEvent(tag, currentID, newID, text, element, username) {
    const chatText = `${username}: ${text}`
    appendText(tag, currentID, newID, chatText, element)
    socket.emit('submit text', { tag, currentID, newID, chatText })
    p_id++
}
function receiveTextEvent(tag, currentID, newID, text, element) {
    appendText(tag, currentID, newID, text, element)
    p_id++
}
function appendText(tag, currentID, newID, text, element) {
    const newTag = document.createElement(tag)
    const currentTag = document.getElementById(currentID)
    newTag.id = newID
    newTag.innerText = text
    element.prepend(newTag)
}
function border(element, style) {
    element.style.borderStyle = style
}
function getBorderStyle(element) {
    return element.style.borderStyle
}
function findBorderButton(obj, borderStyle) {
    for (let element in obj) {
        if (borderStyle === getBorderStyle(obj[element])) return element
    }
}
function pressKeyAndOtherKey(tmpKeydown, key, otherKey) {
    return tmpKeydown[0] === key && tmpKeydown[1] === otherKey || tmpKeydown[0] === otherKey && tmpKeydown[1] === key
}
function moveFromTop1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.top1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.top1, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.top1, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.top1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            return
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.top1, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.top1, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                return
            }
            else if (event.key === 'ArrowUp') {
                return
            }
            else return
        }
    }
}
function moveFromTop2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.top2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.top2, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.top2, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.top2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            return
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.top2, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.top2, borderStyle.none)
                border(buttons.top3, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.top2, borderStyle.none)
                border(buttons.top1, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                return
            }
            else return
        }
    }
}
function moveFromTop3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.top3, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            return
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.top3, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.top3, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                return
            }
            else return
        }
    }
}
function moveFromMiddle1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.middle1, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.middle1, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.middle1, borderStyle.none)
                border(buttons.bottom1, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.middle1, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                return
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.middle1, borderStyle.none)
                border(buttons.top1, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromMiddle2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.middle2, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.middle2, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.middle2, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.middle2, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.middle2, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.middle2, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.middle2, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.middle2, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromMiddle3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.middle3, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.middle3, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                border(buttons.middle3, borderStyle.none)
                border(buttons.bottom3, borderStyle.solid)
            }
            else if (event.key === 'ArrowRight') {
                return
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.middle3, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.middle3, borderStyle.none)
                border(buttons.top3, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            return
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                return
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.bottom1, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                return
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.bottom1, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            return
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                return
            }
            else if (event.key === 'ArrowRight') {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.bottom3, borderStyle.solid)
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.bottom1, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === 'ArrowDown') {
            return
        }
        else if (event.key === 'ArrowRight') {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else if (event.key === 'ArrowLeft') {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === 'ArrowUp') {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowRight')) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', 'ArrowLeft')) {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else {
            if (event.key === 'ArrowDown') {
                return
            }
            else if (event.key === 'ArrowRight') {
                return
            }
            else if (event.key === 'ArrowLeft') {
                border(buttons.bottom3, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === 'ArrowUp') {
                border(buttons.bottom3, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else return
        }
    }
}