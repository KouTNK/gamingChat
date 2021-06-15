//チャットのモジュール。
//テキストの送信イベント、受信イベント、テキストの形式を決める関数がある。

let p_id = 0//p_idとは、HTMLの<p>のidのことである。
function getP_ID() {
    return p_id
}
function plusP_ID() {
    p_id++
}
function createChatText(username, text) {
    return `${username}: ${text}`
}
function receiveTextEvent(tag, newID, text, element) {
    appendText(tag, newID, text, element)
    plusP_ID()
}
function submitTextEvent(tag, newID, text, element) {
    appendText(tag, newID, text, element)
    plusP_ID()
}
function appendText(tag, newID, text, element) {
    const newTag = document.createElement(tag)
    newTag.id = newID
    newTag.innerText = text
    element.prepend(newTag)
}
export { receiveTextEvent, submitTextEvent, getP_ID, createChatText }