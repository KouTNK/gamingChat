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
function download(data, fileName) {
    let fileData = formatCSV(data)
    fileData = encoding(fileData)
    const a = document.createElement('a')
    a.href = window.URL.createObjectURL(new Blob([fileData], { type: 'text/plain' }))
    a.download = `${fileName}`
    a.click()
}
function formatCSV(data) {
    const header = `${Object.keys(data[0]).join(',')}\n`
    const body = data.map((object) => {
        return Object.keys(object).map((key) => {
            return object[key]
        }).join(',')
    }).join("\n")
    return header + body
}
function encoding(dataList) {
    const unicodeList = []
    for (let i = 0; i < dataList.length; i += 1) {
        unicodeList.push(dataList.charCodeAt(i))
    }
    const shiftJisCodeList = Encoding.convert(unicodeList, 'sjis', 'unicode')
    const uint8List = new Uint8Array(shiftJisCodeList)
    return uint8List
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

export { takeMessageLog, getTimeStamp, download }