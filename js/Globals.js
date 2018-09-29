let global = {
    versions: {
        operator: 0,
        appStore: 1,
        HTML: 2
    },

    version: 2,

    orientations: {
        portrait: 0,
        landscape: 1
    },

    orientation: 0,

    resolutions: [{
        w: 800,
        h: 480,
        folder: "800x480"
    }],

    storage: {
        name: "st_inl_",

        data: {
            music: 0.5,
            sounds: 0.5
        }
    },

    fonts: {
        main: "30px saira_medium",
        small: "20px saira_medium"
    },

    preloader: {
        logoFadeTime: 500,
        splashTime: 1500
    },

    game: {
        self: null
    },

    /*
     * All resources for game.
     */
    resources: {
        "image": [
            ["WIN", "../assets/images/480x800/images/WIN.png"]
        ],
        'spritesheet': [
            //width, heigth
            ["language", "../assets/images/480x800/sprites/language.png", 60, 60]
        ]
        // ,
        // 'audio': [
        //     ['audio-click', ['sfx/audio-button.m4a', 'sfx/audio-button.mp3', 'sfx/audio-button.ogg']],
        //     ['audio-theme', ['sfx/music-bitsnbites-liver.m4a', 'sfx/music-bitsnbites-liver.mp3', 'sfx/music-bitsnbites-liver.ogg']]
        // ]
    },

    /*
     * Set addapting background. Done by Jakub Smekal.
     */
    addBackground(key) {
        let bg = this.phaser.add.image(this.phaser.world.centerX, this.phaser.world.centerY, key);
        bg.anchor.setTo(0.5);

        let diff = Math.max(this.phaser.width - bg.width, this.phaser.height - bg.height);

        if (diff > 0) {
            bg.width += diff;
            bg.height += diff;
        }
    },

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};