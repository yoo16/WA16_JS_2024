var price = 500
var quantity = 3
var discount = 100
const TAX_RATE = 0.1
var totalPrice = 0

// 個数を１つ増やす
quantity++
// 個数を１つ減らす
// quantity--

// 合計金額を計算
totalPrice = (price * quantity - discount) * (1 + TAX_RATE)

// 小数点を処理
totalPrice = totalPrice.toFixed()

// 深夜料金を加算
const night_charge_rate = 1.25 

totalPrice *= night_charge_rate
// totalPrice = totalPrice * night_charge_rate

// コンソール表示
console.log(totalPrice)