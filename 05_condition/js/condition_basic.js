var result;
var price = 500;

result = (price == 500)
console.log(result)

result = (price < 0)
console.log(result)

result = (price > 500)
console.log(result)

result = (price >= 500)
console.log(result)

// If Statement
var message = ""
var price = 500
var money = 1000

if (money >= price) {
    console.log("決済完了")
}

// If Else Statement
if (price < 0) {
    console.log("価格エラー")
} else if (money >= price) {
    console.log("決済完了")
} else {
    console.log("残高不足")
}

// 三項演算
message = (price <= money) ? "決済完了" : "残高不足"
console.log(message)