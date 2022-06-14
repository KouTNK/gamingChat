const socket = io.connect(`http://${location.host}/chat_app/hp`)
let ChatsetData
window.addEventListener("load", function () {
// this.document.cookie = "name=oeschger"
// this.document.cookie="favorite_food=tripe"
// console.log(document.cookie)
// document.cookie = "test1=Hello;max-age=1";
// document.cookie = "test2=World";
console.log(this.document.cookie)
// const cookieValue = document.cookie
//   .split('; ')
//   .find(row => row.startsWith('test2'))
//   .split('=')[1];
//  alert(cookieValue);
//  console.log(this.document.cookie)
// if (document.cookie.replace(/(?:(?:^|.*;\s*)doSomethingOnlyOnce\s*\=\s*([^;]*).*$)|^.*$/, "$1") !== "true") {
//     alert("Do something here!");
//     document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
//   }
//   console.log(this.document.cookie)
//   document.cookie = "name=;"
//   console.log(this.document.cookie)

if (document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    console.log('The cookie "reader" exists (ES6)')
}
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