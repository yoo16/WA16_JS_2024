// for文を使って年齢のプルダウンメニューを生成
// selectタグ取得​
const ageSelect = document.getElementById('age-select');
const defaultYear = 30;

// TODO: optionタグ生成の繰り返し
// ageSelect という <select> タグを取得する

for (let index = 0; index <= 100; index++) {
    // optionタグ生成​
    const option = document.createElement('option');
    option.value = index; // index を value に設定
    option.innerHTML = index + ' 歳'; // index + " 歳" を表示

    // selectタグ に optionタグ追加​
    ageSelect.appendChild(option);
}


/**
 * 複利計算 while
 */
function calculateYears() {
    // 入力値を取得
    const initialDeposit = parseFloat(document.getElementById('initial-deposit').value);
    const interestRate = parseFloat(document.getElementById('saving-interest-rate').value) / 100;
    const savingTarget = parseFloat(document.getElementById('saving-target').value);

    // TODO: 入力が正しいかどうかのチェック

    var years = 0;
    var currentAmount = initialDeposit;

    // 複利計算: 目標金額に達するまで年ごとに増やす
    while (currentAmount < savingTarget) {
        currentAmount += currentAmount * interestRate;
        years++;
    }

    // 結果を表示
    document.getElementById('year').innerHTML = years;
}