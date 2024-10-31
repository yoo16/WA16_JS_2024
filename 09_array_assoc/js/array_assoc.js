const current = document.getElementById("current-station");
const furigana = document.getElementById("current-furigana");
const next = document.getElementById("next-station");
const prev = document.getElementById("prev-station");

// 連想配列の定義
var station = {
  name: "東京",
  furigana: "とうきょう",
  address: "東京都千代田区",
  line: "山手線",
};

// DevTools で確認
console.log(station);

// 駅名表示
current.innerHTML = station.name;
furigana.innerHTML = station.furigana;

// 駅名、ふりがなのデータ更新
station.name = "有楽町";
station.furigana = "ゆらくちょう";

// 駅名表示
current.innerHTML = station.name;
furigana.innerHTML = station.furigana;


// 連想配列の配列
// 山手線の各駅を連想配列として定義




// 前の駅名表示

// 次の駅名表示
const nextStation = stations[station.id + 1];
next.innerHTML = nextStation.name;
nextFurigana.innerHTML = nextStation.furigana;
