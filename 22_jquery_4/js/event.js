// バニラJS
// document.getElementById('click-button').addEventListener("click", function () { 
//     $("#result-event").text('クリックしました')
//  })

// clickイベント
// TODO: id=click-button にclickイベント追加
// TODO: id=result-event にメッセージ表示


// changeイベント
$("#select-list").on("change", function () {
    // TODO: 1) 自分の値を取得
    // TODO: 2) 自分を「option:selectd」でフィルタリングし、テキスト取得
    const selected = ""
    const message = selected + "が選択されました";
    $("#result-event").text(message);
});

// 複数インベント
$('#input-text').on({
    input: function () {
        // TODO: 自分の値を取得
        const inputText = ""
        $("#result-event").text(inputText)
    },
    focus: function () {
        // TODO: 自分の class=bg-blue-100 追加
    },
    blur: function () {
        // TODO: 自分の class=bg-blue-100 削除
    }
});

// clickイベント（イベントデリゲーション）
$('#item-list').on('click', 'li', function () {
    const message = $(this).text() + "が選択されました"
    $("#result-event").text(message)

    // TODO: #item-list li で class=bg-orange-100 をすべて削除
    // TODO: 自分に class=bg-orange-100 を追加
});

// マウスオーバー イベントハンドラー
const mouseOverHandler = function (event) {
    $(this).text('マウスオーバー')
}

// マウスアウトイベントハンドラー
const mouseOutHandler = function (event) {
    $(this).text('')
}

// マウスオーバーイベント
$('#box').on('mouseover', mouseOverHandler)
// マウスアウトイベント
$('#box').on('mouseout', mouseOutHandler)
// クリックイベント
$('#event-off-button').on('click', function () {
    // TODO: mouseover, mouseoutイベント解除
});