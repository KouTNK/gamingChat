//ゲーム画面を見ている時、すぐコメントが送られたことに気づけるように画面を点滅させる。
function flashScreen(flashColor, defaultColor, flashTime, element) {
    element.style.backgroundColor = flashColor
    setTimeout(function () {
        element.style.backgroundColor = defaultColor
    }, flashTime)
}
export { flashScreen }