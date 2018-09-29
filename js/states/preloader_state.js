class PreloaderState extends Phaser.State {

    preload() {
        this.preloadResources();

        global.preloader.self = this;
        this.game.load.onLoadStart.add(this.loadingStarted, this);
        this.game.load.onFileComplete.add(this.loadingFileCompleted, this);
        this.game.load.onLoadComplete.add(this.loadingFinished, this);
        this.game.load.start();
    }

    preloadResources() {
        var pack = global.resources;
        for (var method in pack) {
            pack[method].forEach(function(args) {
                var loader = this.load[method];
                loader && loader.apply(this.load, args);
            }, this);
        }
    }


    loadingStarted() {
        this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "0%", {
            font: global.fonts.main,
            fill: "#FFFFFF",
            align: "center"
        });
        this.progress.anchor.setTo(0.5);
    }

    loadingFileCompleted(progress, cacheKey) {
        this.progress.setText(progress + "%");

        if (cacheKey == "splash") {
            global.addBackground(this.game, cacheKey);
            this.progress.bringToTop();
        }
    }

    loadingFinished() {
        var value;

        for (var key in global.audio) {
            if (global.audio.hasOwnProperty(key)) {
                value = global.audio[key];

                if (value.type == "music") {
                    global.managers.audio.addMusic(key, value.volume, value.loop);
                } else {
                    global.managers.audio.addSound(key, value.volume, value.loop);
                }
            }
        }

        var lang = navigator.userLanguage || navigator.language;

        // global.managers.language.load();
        // global.managers.language.setLanguage(lang.substring(0, 2));
        // global.managers.storage.load();

        this.game.time.events.add(global.preloader.splashTime, function() {
            this.game.state.start("Menu");
        }, this);
    }

}