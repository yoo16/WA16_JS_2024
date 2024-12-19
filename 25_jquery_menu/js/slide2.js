$(function () {
    const $menuButton = $('#menu-button');
    const $menuLink = $('#slide-menu a[href^="#"]');
    const $slideMenu = $('#slide-menu');
    const headerHeight = $('#header-menu').outerHeight() + 10;

    // 初期化処理
    function initMenu() {
        // TODO: css指定：left: -100%
        $slideMenu.css({
            position: 'absolute', // メニューを絶対位置に設定
            left: '-100%' // メニューを画面外に隠す
        });
    }

    // スライド処理
    function slideMenu() {
        let x = '0px';
        // TODO: スライドメニューの class=on をトグル
        $slideMenu.toggleClass('on');
        if (!$slideMenu.hasClass('on')) {
            // TODO: x をスライドメニューの幅分左に移動
            x = '-' + $slideMenu.width() + 'px';
        }
        // TODO: left に xを設定してアニメーション
        $slideMenu.animate({ left: x }, 300);
    }

    // クリックイベント
    $menuButton.on('click', function () {
        slideMenu();
    });

    // スムーススクロール
    $menuLink.on('click', function (e) {
        e.preventDefault();
        slideMenu();
        const target = $(this.getAttribute('href'));
        if (target.length) {
            const targetOffset = target.offset().top - headerHeight;
            $('html, body').stop().animate({
                scrollTop: targetOffset
            }, 500);
        }
    });

    initMenu();
});
