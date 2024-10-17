/**
 * ビルトイン関数
 */
// 文字を整数に変換
var numberString = "0005"
var number = parseInt(numberString)

console.log(numberString)
console.log(number)

// 数字かどうか判別
var result = isNaN("HAL")
console.log(result)
var result = isNaN(numberString)
console.log(result)
var result = isNaN(number)
console.log(result)

// 3秒後(3000ms）に文字を表示
// sett
setTimeout(() => {
    console.log("実行しました！")
}, 3000);

/**
 * ユーザ定義関数
 */