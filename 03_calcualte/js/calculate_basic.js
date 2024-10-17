var price = 500
var quantity = 3
var discount = 100
const TAX_RATE = 0.1
var totalPrice = 0

totalPrice = (price * quantity - discount) * (1 + TAX_RATE)

// 小数点を処理
totalPrice = totalPrice.toFixed()

console.log(totalPrice)