//ゲーム画面を見ている時、すぐコメントが送られたことに気づけるように画面を点滅させる。
function flashScreen(flashColor, defaultColor, flashTime, element) {
    element.style.backgroundColor = flashColor
    setTimeout(function () {
        element.style.backgroundColor = defaultColor
    }, flashTime)
}
//ボディの前面にチャット枠とボタン枠があり，ボディは裏に有るため，光ってるように見えない．
//解決するには，一時的にチャット枠とボタン枠の前面にデフォルトの背景色とは違う色の枠を作り、一瞬で消せばいい．
function flashScreenAndRemoveElement(flashColor, flashTime, element) {
    element.style.backgroundColor = flashColor
    setTimeout(function () {
        element.remove()
    }, flashTime)
}
function createFlashScreenOfElement(tagName, id, className, element) {
    const newTag = document.createElement(tagName)
    newTag.id = id
    newTag.className = className
    element.prepend(newTag)
    return document.getElementById(id)
}

export { flashScreen, flashScreenAndRemoveElement, createFlashScreenOfElement }