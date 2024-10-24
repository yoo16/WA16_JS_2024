// 現在の年月日と時刻を表示する関数
function updateTime() {
    const now = new Date();

    // 年月日と時刻を取得
    // TODO：日時の値を取得
    var year = 0;
    var month = 0;
    var day = 0;
    var hours = 0;
    var minutes = 0;
    var seconds = 0;

    // フォーマット YYYY/MM/DD HH:MM:SS
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    const datetimeElement = document.getElementById("datetime");

    datetimeElement.textContent = formattedDateTime;
}

// 初回実行
updateTime();

// 1秒ごとの更新
setInterval(updateTime, 1000);
