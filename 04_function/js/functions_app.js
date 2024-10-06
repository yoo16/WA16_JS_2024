// オーダー
const TAX_RATE = 0.1;
var name = "コーヒー";
var price = 500;
var quantity = 2;
var discount = 100;
var totalPrice = 0;

// TODO: 関数定義 & 実装（calculate プログラムから）
/**
 * order()
 * オーダー表示
 * 
 * @param {*} name 
 * @param {*} price 
 * @param {*} quantity 
 */
function order(name, price, quantity) {
    // HTML表示
}

/**
 * calculateTotalPrice()
 * 合計金額（税込）の計算 
 * 
 * @param {*} price 
 * @param {*} quantity 
 * @param {*} discount 
 * @returns 
 */
function calculateTotalPrice(price, quantity, discount) {
    // 合計金額計算
    // 値を返す
}

/**
 * createOrderCode()
 * オーダーコード生成して返す
 * xx-xxxx
 * 
 * @param {*} tableNo 
 * @param {*} orderNo 
 * @returns 
 */
function createOrderCode(tableNo, orderNo) {
    // オーダーコード生成
    // オーダーコードを返す
}

/**
 * randomNumber()
 * ランダムな整数
 * 
 * @param {*} min 
 * @param {*} max 
 * @returns 
 */
const randomNumber = (min, max) => {
    //(0 - 1 のランダム) * (最大値 - 最小値) + 最小値
    var number = Math.floor(Math.random() * (max + 1 - min)) + min;
    return number;
}

/**
 * formatDate()
 * 年月日生成
 * 
 * @param {*} year 
 * @param {*} month 
 * @param {*} day 
 * @returns 
 */

// TODO: 関数で実行
// オーダー処理

// 合計金額取得処理
// HTML表示（割引、合計金額）

// オーダー完了処理（タイマー）
document.getElementById('status').innerHTML = "Loading..."
setTimeout(() => {
    document.getElementById('status').innerHTML = "オーダーが完了しました"

    var tableNo = randomNumber(1, 10);
    var orderNo = randomNumber(1000, 10000);
    var orderCode = createOrderCode(tableNo, orderNo);
    console.log(orderCode)
    document.getElementById('order-code').innerHTML = orderCode;
}, 2000);
