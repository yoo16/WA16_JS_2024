const video = document.getElementById('video');
const volumeSlider = document.getElementById('volumeSlider');

// ビデオボリューム(0 - 1)
var volume = 0;
// ビデオファイル
const videoFile = "videos/video1.mp4";

/**
 * loadVideo()
 * ビデオ読み込み
 */
function loadVideo(filePath) {
    // TODO: ビデオファイルパス設定

    // TODO: ビデオ読み込み

}

/**
 * onLoadedVideo()
 * ビデオ読み込み後の処理
 */
function onLoadedVideo() {
    // TODO: ビデオ音量設定

    // TODO: 音量スライダー設定
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function onChangeVolume(event) {
    volume = event.target.value;
    changeVolume(volume)
}

/**
 * changeVolume()
 * 音声ボリューム変更
 */
function changeVolume(value) {
    video.volume = value;
}

/**
 * play()
 * 再生
 */
function play() {
    // TODO: ビデオ再生
}

/**
 * pause()
 * 停止
 */
function pause() {
    // TODO: ビデオ停止

}

/**
 * toggleMute()
 * 音声ミュート切り替え
 */
function toggleMute() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }
}

// ビデオ読み込み
loadVideo(videoFile);