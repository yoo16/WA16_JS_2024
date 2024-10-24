// 現在の年月日と時刻を表示する関数
function updateTime() {
    const now = new Date();

    // 年月日と時刻を取得
    // TODO：日時の値を取得
    var year = now.getFullYear()
    var month = now.getMonth() + 1
    var day = now.getDate()
    var hours = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()

    // フォーマット YYYY/MM/DD HH:MM:SS
    const formattedDateTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;

    const datetimeElement = document.getElementById("datetime");

    datetimeElement.textContent = formattedDateTime;
}

// 初回実行
updateTime();

// 1秒ごとの更新
setInterval(updateTime, 1000);
