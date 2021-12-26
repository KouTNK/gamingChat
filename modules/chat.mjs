//チャットのモジュール。
//テキストの送信イベント、受信イベント、テキストの形式を決める関数がある。

let p_id = 0//p_idとは、HTMLの<p>のidのことである。
function getP_ID() {
    return p_id
}
function plusP_ID() {
    p_id++
}
function createChatText(username, usernameClassName, text, textClassName) {
    return `<p class=${usernameClassName}>${username}</p><br><p class=${textClassName}>${text}</p>`

}
function receiveTextEvent(tag, newID, text, element, className) {
    appendText(tag, newID, text, element, className)
    plusP_ID()
}
function submitTextEvent(tag, newID, text, element, className, backgroundColor) {
    appendText(tag, newID, text, element, className, backgroundColor)
    plusP_ID()
}
function appendText(tag, newID, text, element, className, backgroundColor) {
    const newTag = document.createElement(tag)
    newTag.id = newID
    newTag.innerHTML = text
    newTag.className = className
    newTag.style.backgroundColor = backgroundColor
    element.prepend(newTag)
}
function changeFontSizeOfFirstTextInTheChildNode(element, fontSize) {
    const childNodes = element.childNodes
    if (childNodes.length > 1) changeFontSize(childNodes[1].id, fontSize)
}
function changeFontSize(element, fontSize) {
    document.getElementById(element).style.fontSize = fontSize
}
export { receiveTextEvent, submitTextEvent, getP_ID, createChatText }