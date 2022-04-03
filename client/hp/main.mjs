const socket = io.connect(`http://${location.host}/chat_app/hp`)
let ChatsetData
window.addEventListener("load", function () {

})

function addOption(selectTag, text, value) {
    const option = document.createElement("option")
    option.text = text
    option.value = value
    selectTag.appendChild(option)
}

selectChatset.onchange = (function (event) {
    const index = selectChatset.selectedIndex
    const selectValue = selectChatset.options[index].value
    const catChatset = document.getElementById("catChatset")
    ChatsetData.forEach((obj) => {
        if (obj.name === selectValue) {
            console.log(chatsetFormat(obj.chatset.left))
            catChatset.innerHTML = `左画面${chatsetFormat(obj.chatset.left)}<br>真ん中画面${chatsetFormat(obj.chatset.center)}<br>右画面${chatsetFormat(obj.chatset.right)}`
        }
    })
})
function chatsetFormat(chatset) {
    return `<p>${chatset.top1}---${chatset.top2}---${chatset.top3}</p>
    <p>${chatset.middle1}---${chatset.middle2}---${chatset.middle3}</p>
    <p>${chatset.bottom1}---${chatset.bottom2}---${chatset.bottom3}</p>`
}
socket.on('send chatset data', function (data) {
    const selectChatset = document.getElementById("selectChatset")
    ChatsetData = data.ChatsetData
    ChatsetData.forEach((obj) => {
        addOption(selectChatset, obj.name, obj.name)
    })
})