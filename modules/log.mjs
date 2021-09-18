// import { timeStamp } from "console";


function takeMessageLog(timeStamp, username, text, key, position) {
    return {
        timeStamp,
        username,
        text,
        key,
        position
    }
}
function getTimeStamp() {
    return Date.now()
}

function test() {
    const history = []
    const timeStamp = getTimeStamp()
    const username = "ahaha"
    const text = "konnnitiha"
    const key = "enter"
    history.push(takeMessageLog(timeStamp, username, text, key))
    history.push(takeMessageLog(timeStamp, username, text, key))
    history.push(takeMessageLog(timeStamp, username, text, key))
    history.push(takeMessageLog(timeStamp, username, text, key))
    history.push(takeMessageLog(timeStamp, username, text, key))
    console.log(history)
}
// test()

export { takeMessageLog, getTimeStamp }