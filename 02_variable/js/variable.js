// id=name のHTMLタグを取得して、タグの中に文字列を入れる（表示）
document.getElementById("name").innerHTML = "お茶"

// 変数定義
var name = "コーヒー"
document.getElementById("name").innerHTML = name

// 再代入
name = "紅茶"
document.getElementById("name").innerHTML = name

// 価格
var price = 500
document.getElementById("price").innerHTML = price

// 個数
var quantity = 5
document.getElementById("quantity").innerHTML = quantity

// 割引 
var discount = 100
document.getElementById("discount").innerHTML = discount

// コンソール表示
// clg
console.log(name)