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

// 小数四捨五入、切り捨て
var height = 169.5
var result = 0

result = Math.round(height)
console.log(result)
result = Math.ceil(height)
console.log(result)
result = Math.floor(height)
console.log(result)


/**
 * ユーザ定義関数
 */
// fun と入力して、 Function Statementを選択
function calculate(x) {
    var y = x + 5
    return y
}

// calculate() に数字を入れてを実行
var answer = calculate(10)
console.log(answer)

// 無名関数
const hello1 = function(name) {
    console.log(name + "さん、こんにちは")
}
hello1("HAL")

// アロー関数
const hello2 = (name) => {
    console.log(name + "さん、こんにちは")
}
hello2("HAL")