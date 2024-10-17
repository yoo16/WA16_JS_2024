// オーダーアプリ
const TAX_RATE = 0.1;
var itemName = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;
var tableNo = 1;

/**
 * showHTML()
 * HTML表示
 */
// TODO: 関数定義
function showHTML(id, value) {
    document.getElementById(id).innerHTML = value
}

/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 */
// TODO: 関数定義
function calculateTotalPrice(price, quantity, discount) {
    var totalPrice = (price * quantity - discount) * (1 + TAX_RATE)
    var totalPrice = totalPrice.toFixed() 
    return totalPrice
}

/**
 * createOrderCode(
 * オーダーコード作成
 */
// TODO: 関数定義

/**
 * randomNumber()
 * ランダムな整数
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

// TODO: HTML表示（商品名、価格、個数）
showHTML('item-name', itemName)
showHTML('price', price)
showHTML('quantity', quantity)


// TODO: 合計金額計算
var totalPrice = calculateTotalPrice(price, quantity, discount)

// TODO: HTML表示（割引、合計金額）
showHTML('discount', discount)
showHTML('totalPrice', totalPrice)

// TODO: オーダーコード（テーブルNo-オーダーNo）、完了メッセージ処理