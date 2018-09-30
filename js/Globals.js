window.global = {
    versions: { operator: 0, appStore: 1, HTML: 2 },
    version: 2,
    orientations: { portrait: 0, landscape: 1 },
    orientation: 0,

	resolutions: [
		// Lowest to highest resolution.
	    { w: 540, h: 960, folder: "540x960" },
		{ w: 1080, h: 1920, folder: "1080x1920" }
	],
	
    sprites: {
        card_front: { path: "", w: [0, 0], h: [0, 0] }
    },

    audio: {
        // Path without extension.
        //music: { path: "", volume: 1, loop: true, type: "music" },
        //sound: { path: "", volume: 1, loop: false, type: "audio" },
    },

    managers: {

    },

    storage: {
        name: "st_inl_",

        data: {
            music: 0.5,
            sounds: 0.5
        }
    },

    fonts: {
        main: "30px arial"
    },

	preloader: {
		logoFadeTime: 500,
		splashTime: 1500
	},
	
    menu: {
		
    },

    game: {

    },

    offsets: {

    },

    addBackground: function (key) {
	    var bg = global.phaser.add.image(global.phaser.world.centerX, global.phaser.world.centerY, key);
        bg.anchor.setTo(0.5);

        var diff = Math.max(global.phaser.width - bg.width, global.phaser.height - bg.height);

        if(diff > 0) {
            bg.width += diff;
            bg.height += diff;
        }
    }
};
