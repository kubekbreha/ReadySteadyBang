var Preloader = function() {

};

Preloader.prototype = {
	preload: function() {
	    var folder = "assets/graphics/" + global.resolutions[global.res].folder + "/";

		this.game.load.text("lang_strings", "assets/data/m.json");

		this.game.load.image("overlay", folder + "overlay.png");
		this.game.load.image("bg", folder + "background.png");

        this.game.load.atlasJSONHash("chips", folder + "chips.png", folder + "chips.json");

		var value;

		for(var key in global.sprites) {
			if(global.sprites.hasOwnProperty(key)) {
				value = global.sprites[key];
                this.game.load.spritesheet(key, folder + value.path, value.w[global.res], value.h[global.res]);
            }
        }

        for(var key in global.audio) {
            if(global.audio.hasOwnProperty(key)) {
                value = global.audio[key];
                this.game.load.audio(key, [ value.path + ".ogg", value.path + ".mp3" ]);
            }
        }

        global.preloader.self = this;
        this.game.load.onLoadStart.add(this.loadingStarted, this);
        this.game.load.onFileComplete.add(this.loadingFileCompleted, this);
        this.game.load.onLoadComplete.add(this.loadingFinished, this);
        this.game.load.start();
	},

    loadingStarted: function() {
		this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY, "0%", { font: global.fonts.main, fill: "#FFFFFF", align: "center" });
		this.progress.anchor.setTo(0.5);
	},

    loadingFileCompleted: function(progress, cacheKey) {
        this.progress.setText(progress + "%");

        if(cacheKey == "splash") {
            global.addBackground(this.game, cacheKey);
            this.progress.bringToTop();
        }
    },

    loadingFinished: function() {
        var value;

        for(var key in global.audio) {
            if(global.audio.hasOwnProperty(key)) {
                value = global.audio[key];

                if(value.type == "music") {
                    global.managers.audio.addMusic(key, value.volume, value.loop);
                } else {
                    global.managers.audio.addSound(key, value.volume, value.loop);
                }
            }
        }

        var lang = navigator.userLanguage || navigator.language;

        global.managers.language.load();
        global.managers.language.setLanguage(lang.substring(0, 2));
        global.managers.storage.load();

        this.game.time.events.add(global.preloader.splashTime, function() { this.game.state.start("Menu"); }, this);
    }
};
