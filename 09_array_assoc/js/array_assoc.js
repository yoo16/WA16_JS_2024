const current = document.getElementById('current-station');
const furigana = document.getElementById('current-furigana');
const next = document.getElementById('next-station');
const prev = document.getElementById('prev-station');

// 連想配列（オブジェクト）の定義
var station = {
    name: "東京",
    furigana: "とうきょう",
}
// DevTools で確認
console.log(station)

// ブラウザの強制再読み込み
// Windows: Ctrl + Shift + R
// Mac: Cmd + Shift + R

// TODO:駅名表示
current.innerHTML = station.name
furigana.innerHTML = station.furigana

// 駅名、ふりがなのデータ更新
station.name = "有楽町"
station.furigana = "ゆうらくちょう"

// 駅名表示
current.innerHTML = station.name
furigana.innerHTML = station.furigana

// 連想配列の配列
const stations = [
    { name: "東京", furigana: "とうきょう", },
    { name: "有楽町", furigana: "ゆうらくちょう", },
    { name: "新橋", furigana: "しんばし", },
]

console.log(stations)

// 現在の駅名表示
const currentStation = stations[1]
console.log(currentStation)

current.innerHTML = currentStation.name
furigana.innerHTML = currentStation.furigana

// 前の駅名表示

// 次の駅名表示