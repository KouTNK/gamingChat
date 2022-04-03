import fs from 'fs'
function createChatsetData(name, game, left, center, right) {
    return {
        name,
        game,
        chatset: {
            left,
            center,
            right,
        },
    }
}
function createChatset(top1, top2, top3, middle1, middle2, middle3, bottom1, bottom2, bottom3) {
    return {
        top1,
        top2,
        top3,
        middle1,
        middle2,
        middle3,
        bottom1,
        bottom2,
        bottom3,
    }
}
function pushChatsetDataIntoJSONfile(data, jsonObject) {
    const masterData = []
    jsonObject.forEach((obj)=>{
        masterData.push(obj)
    })
    masterData.push(data)
    return masterData
}
function test() {
    //jsonに必要なデータ作成
    const name = 'tanaka'
    const game = 'ApexLegends'
    const leftChatset = createChatset('こんにちは', 'グッド！', 'どんまい！', 'くそ！', '敵チキンかよ！', '助かった！', '草生えたw', 'うるせーよ', '黙れ！')
    const centerChatset = createChatset('攻めるぞ！', 'ロー！', '攻めて！', '待つぞ！', '漁夫だ！', '逃げよう！', '回復してる！', '見張って！', '俺を盾にしろ！')
    const rightChatset = createChatset('挟み撃ちしよう', '3秒後にみんな攻めよう', '高所でこもろう', '誰か残って！前に出る！', '誰か残って！探索する！', '俺ここにいるから探索して', '青の人ウルト使って！', '黄の人ウルト使って！', '緑の人ウルト使って！')
    
    //データを一つにまとめる
    const data = createChatsetData(name, game, leftChatset, centerChatset, rightChatset)
    
    //データをJSONファイルに追加する。
    const jsonObject = JSON.parse(fs.readFileSync('./server/chatset.json', 'utf8'))
    const masterData = pushChatsetDataIntoJSONfile(data,jsonObject.ChatsetData)
    const writeData = JSON.stringify({ ChatsetData: masterData })
    // fs.writeFileSync('./server/chatset.json',writeData)
}
export {createChatsetData,createChatset,pushChatsetDataIntoJSONfile}