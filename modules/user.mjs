function registerUserName() {
    while (1) {
        let UserName = window.prompt("名前を入力してください", "")
        if (UserName) {
            return UserName
        }
    }
}
export { registerUserName }