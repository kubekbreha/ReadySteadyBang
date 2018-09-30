let initGame = function() {
    let resolution;
    let game;


    if (global.version == global.versions.HTML) {
        global.res = 0;
        resolution = global.resolutions[global.res];
    } else {
        for (var i = 0; i < global.resolutions.length; i++) {
            resolution = global.resolutions[i];

            if (window.innerHeight <= resolution.h || i == global.resolutions.length - 1) {
                global.screenDims = Utils.ScreenUtils.calculateScreenMetrics(resolution.w, resolution.h, global.orientation);
                global.res = i;
                break;
            }
        }

        resolution = {
            w: global.screenDims.gameWidth,
            h: global.screenDims.gameHeight
        };

    }

    game = new Phaser.Game(resolution.w, resolution.h, Phaser.CANVAS);
    global.phaser = game;

    // global.managers.storage = new StorageManager(game);
    // global.managers.language = new Languages(game);
    // global.managers.audio = new AudioManager(game);
    //
    // if (global.version == global.versions.appStore) {
    //     global.managers.notification = new Notifications(game);
    //     global.managers.ads = new Ads(game);
    //     global.managers.inApps = new InApps(game);
    // }

    game.state.add("Boot", BootState, false);
    game.state.add("Preloader", PreloaderState, false);
    game.state.add("Game", GameState, false);
    game.state.add("Menu", MenuState, false);

    game.state.start("Boot");
};

if (global.version == global.versions.HTML || !window.cordova) {
    window.onload = initGame;
} else {
    document.addEventListener("deviceready", initGame, false);
}