let startX
let endX
function logSwipeStart(event) {
    startX = event.touches[0].pageX
    endX = undefined
}
function logSwipe(event) {
    event.preventDefault()
    endX = event.touches[0].pageX
}
const position = {
    default: "default",
    left: "left",
    right: "right"
}
let currentPosition = position.default
function logSwipeEnd(event) {
    console.log('endX:' + endX, 'startX:' + startX, 'endX-startX:' + (endX - startX))
    if (-70 < (endX - startX)) {
        if (position.default === currentPosition) {
            currentPosition = position.left
            leftButtons()
        }
        else if (position.right === currentPosition) {
            currentPosition = position.default
            defaultButtons()
        }
    }
    else if (70 > endX - startX) {
        if (position.default === currentPosition) {
            currentPosition = position.right
            rightButtons()
        }
        else if (position.left === currentPosition) {
            currentPosition = position.default
            defaultButtons()
        }
    }
}
// function setTextOfTheButton(button, text) {
//     button.innerHTML = text
//     button.value = text
// }
// for in か for of　か　for のどれがいいか？またはボタンとテキストの書き方を変えるか？
// function setTextOfTheButtons(buttons, texts) {
//     for (let button of buttons) {
//         setTextOfTheButton(button, texts[button])
//     }
// }
function defaultButtons() {
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
function leftButtons() {
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
function rightButtons() {
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
}