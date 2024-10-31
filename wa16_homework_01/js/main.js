/**
 * 変数定義
 * JSのプログラムで、自分の氏名と学籍番号と変数定義してHTML表示してください。
 */
// TODO: 学籍番号と氏名の変数を定義
var studentNumber = "0000001"
var studentName = "HAL 太郎"

// TODO: 学籍番号と氏名をHTMLに表示
document.getElementById('studentNumber').innerHTML = studentNumber;
document.getElementById('studentName').innerHTML = studentName;

/**
 * documentオブジェクト
 * JSのプログラムで、ウィンドウタイトルを「課題01-学籍番号-氏名」に変更してください。
 */
// TODO: ウィンドウタイトルを「課題01-学籍番号-氏名」に変更
document.title = "課題01-" + studentNumber + "-" + studentName

/**
 * 演算
 * JSのプログラムで、つぎの問題を完成させてください。
 */
// TODO: 思い浮かんだ好きな数字を memoryNumber に代入
var memoryNumber = 36;

// TODO: 思い浮かんだ好きな数字をHTMLに表示
document.getElementById('memoryNumber').innerHTML = memoryNumber;

// TODO: 計算
// 思い浮かんだ好きな数字を、答えに代入（初期値）
var answerNumber = memoryNumber;

// 1. その数字（answerNumber）に3をかけます。
answerNumber *= 3
// answerNumber = answerNumber * 3

// 2. 結果に6を足します。
answerNumber += 6
// answerNumber = answerNumber + 6

// 3. その結果を3で割ります。
answerNumber /= 3
// answerNumber = answerNumber / 3

// 4. 最初に思い浮かべた数字を引いてください。
answerNumber -= memoryNumber
// answerNumber = answerNumber - memoryNumber

// TODO: 答え「answerNumber」をHTML表示
document.getElementById('answerNumber').innerHTML = answerNumber;


/**
 * 条件分岐と関数の実行
 */
// 次の条件で、プログラムを完成させてください。
// 0歳～5歳：0円
// 6歳～17歳：500円
// 18歳～64歳：1000円
// 65歳以上：700円

// 検索ボタンがクリックされると実行
function onCalculate() {
    // 年齢取得
    const age = document.getElementById("age").value;
    console.log(age);

    if (isNaN(age)) {
        // 年齢が数字でない場合
        // TODO: アラート表示「年齢が正しくありません」
    } else {
        // 年齢が数字の場合
        // TODO: 関数 calculateTicketPrice() に年齢を入れて料金を取得し、fee に代入
        var fee;

        // 料金表示
        document.getElementById("fee").textContent = fee;
    }
}

// TODO: 関数に年齢による料金分別をして、データを返す
function calculateTicketPrice(age) {

}