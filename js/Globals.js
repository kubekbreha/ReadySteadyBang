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
        w: 480,
        h: 800,
        folder: "480x800"
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

    playboard: null,

    createHelper2DBoard() {
        var board = [
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ];
        var startRowWithWhite = false;
        for (var row = 0; row < 8; row++) {
            if (startRowWithWhite) {
                startRowWithWhite = false;
            } else {
                startRowWithWhite = true;
            }
            for (var col = 0; col < 8; col++) {
                if (startRowWithWhite) {
                    if (col % 2 === 0) {
                        board[row][col] = 0;
                    } else {
                        board[row][col] = 1;
                    }
                } else {
                    if (col % 2 === 0) {
                        board[row][col] = 1;
                    } else {
                        board[row][col] = 0;
                    }
                }
            }
        }
        this.playboard = board;
    },

    rules: {
        captureBackwards: true,
        capture: 2,
        king: 0,
        kingPriority: false
    },

    setRules1(captureBackwards) {
        this.rules.captureBackwards = captureBackwards;
    },

    setRules2(capture) {
        this.rules.capture = capture;
    },

    setRules3(king) {
        this.rules.king = king;
    },

    setRules4(kingPriority) {
        this.rules.kingPriority = kingPriority;
    },

    settings: {
        playAs: 0,
        stonesSkin: 1,
        boardSkin: 4,
        highlight: false,
        music: true,
        sounds: false
    },

    setPlayAs(playAs) {
        this.settings.playAs = playAs;
    },

    setStonesSkin(stonesSkin) {
        this.settings.stonesSkin = stonesSkin;
    },

    setBoardSkin(boardSkin) {
        this.settings.boardSkin = boardSkin;
    },

    setHighlight(highlight) {
        this.settings.highlight = highlight;
    },

    setMusic(music) {
        this.settings.music = music;
    },

    setSounds(sounds) {
        this.settings.sounds = sounds;
    },

    ai: {
        level: 0
    },

    /*
     * All resources for game.
     */
    resources: {
        "image": [
            ["background", "../assets/images/480x800/images/background.png"],
            ["game_bg", "../assets/images/480x800/images/game_bg.png"],

            ["bg_square_off", "../assets/images/480x800/images/bg_square_off.png"],
            ["bg_square_on", "../assets/images/480x800/images/bg_square_on.png"],

            ["board1_n", "../assets/images/480x800/images/board1_n.png"],
            ["board1", "../assets/images/480x800/images/board1.png"],
            ["board2_n", "../assets/images/480x800/images/board2_n.png"],
            ["board2", "../assets/images/480x800/images/board2.png"],
            ["board3_n", "../assets/images/480x800/images/board3_n.png"],
            ["board3", "../assets/images/480x800/images/board3.png"],
            ["board4_n", "../assets/images/480x800/images/board4_n.png"],
            ["board4", "../assets/images/480x800/images/board4.png"],
            ["board5_n", "../assets/images/480x800/images/board5_n.png"],
            ["board5", "../assets/images/480x800/images/board5.png"],

            ["bt_arrow_l", "../assets/images/480x800/images/bt_arrow_l.png"],
            ["bt_arrow_r", "../assets/images/480x800/images/bt_arrow_r.png"],
            ["bt_back", "../assets/images/480x800/images/bt_back.png"],
            ["bt_ingame_menu", "../assets/images/480x800/images/bt_ingame_menu.png"],
            ["bt_instruction_off", "../assets/images/480x800/images/bt_instruction_off.png"],
            ["bt_instruction_on", "../assets/images/480x800/images/bt_instruction_on.png"],
            ["bt_menu", "../assets/images/480x800/images/bt_menu.png"],
            ["bt_restart", "../assets/images/480x800/images/bt_restart.png"],
            ["bt_setting", "../assets/images/480x800/images/bt_setting.png"],
            ["bt_short_off", "../assets/images/480x800/images/bt_short_off.png"],
            ["bt_short_on", "../assets/images/480x800/images/bt_short_on.png"],
            ["bt_shutdown", "../assets/images/480x800/images/bt_shutdown.png"],
            ["bt_undo", "../assets/images/480x800/images/bt_undo.png"],

            // ["dialog_bg", "../assets/images/480x800/images/dialog_bg.png"],
            ["hand", "../assets/images/480x800/images/hand.png"],
            ["on_off1", "../assets/images/480x800/images/on_off1.png"],
            ["on_off2", "../assets/images/480x800/images/on_off2.png"],
            ["PLAY_bt", "../assets/images/480x800/images/PLAY_bt.png"],
            ["PLAY_new", "../assets/images/480x800/images/PLAY_new.png"],
            ["players_icon", "../assets/images/480x800/images/players_icon.png"],
            ["splash", "../assets/images/480x800/images/splash.png"],
            ["X-ko", "../assets/images/480x800/images/X-ko.png"],
            ["language_bg_full", "../assets/images/480x800/images/language_bg.png"],

            ["st1", "../assets/images/480x800/images/st1.png"],
            ["st2", "../assets/images/480x800/images/st2.png"],
            ["st3", "../assets/images/480x800/images/st3.png"],
            ["st4", "../assets/images/480x800/images/st4.png"],
            ["st5", "../assets/images/480x800/images/st5.png"],

            ["stone1a", "../assets/images/480x800/images/stone1a.png"],
            ["stone1b", "../assets/images/480x800/images/stone1b.png"],
            ["stone2a", "../assets/images/480x800/images/stone2a.png"],
            ["stone2b", "../assets/images/480x800/images/stone2b.png"],
            ["stone3a", "../assets/images/480x800/images/stone3a.png"],
            ["stone3b", "../assets/images/480x800/images/stone3b.png"],
            ["stone4a", "../assets/images/480x800/images/stone4a.png"],
            ["stone4b", "../assets/images/480x800/images/stone4b.png"],
            ["stone5a", "../assets/images/480x800/images/stone5a.png"],
            ["stone5b", "../assets/images/480x800/images/stone5b.png"],

            ["LOSE", "../assets/images/480x800/images/LOSE.png"],
            ["WIN", "../assets/images/480x800/images/WIN.png"]
        ],
        'spritesheet': [
            //width, heigth
            ["dialog_bg", "../assets/images/480x800/images/dialog_bg.png", 433, 50],
            ["language_bg", "../assets/images/480x800/images/language_bg.png", 30, 90],

            ["icons", "../assets/images/480x800/sprites/icons.png", 25, 25],
            ["selector", "../assets/images/480x800/sprites/selector.png", 51, 51],
            ["stone1", "../assets/images/480x800/sprites/stone1.png", 51, 51],
            ["stone2", "../assets/images/480x800/sprites/stone2.png", 51, 51],
            ["stone3", "../assets/images/480x800/sprites/stone3.png", 51, 51],
            ["stone4", "../assets/images/480x800/sprites/stone4.png", 51, 51],
            ["stone5", "../assets/images/480x800/sprites/stone5.png", 51, 51],
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

    /*
     * Get board sprite.
     */
    getBoardSprite() {
        if (this.settings.boardSkin == 0) {
            return "board1";
        } else if (this.settings.boardSkin == 1) {
            return "board2";
        } else if (this.settings.boardSkin == 2) {
            return "board3";
        } else if (this.settings.boardSkin == 3) {
            return "board4";
        } else if (this.settings.boardSkin == 4) {
            return "board5";
        }
    },

    /*
     * Get stone sprites.
     */
    getStonesSprites() {
        if (this.settings.stonesSkin == 0) {
            return "stone1";
        } else if (this.settings.stonesSkin == 1) {
            return "stone2";
        } else if (this.settings.stonesSkin == 2) {
            return "stone3";
        } else if (this.settings.stonesSkin == 3) {
            return "stone4";
        } else if (this.settings.stonesSkin == 4) {
            return "stone5";
        }
    },

    /*
     * Get stone sprites to setting to setting switchers.
     */
    getStonesSpritesToSettings() {
        if (this.settings.stonesSkin == 0) {
            return ["st1", "stone1a", "stone1b"];
        } else if (this.settings.stonesSkin == 1) {
            return ["st2", "stone2a", "stone2b"];
        } else if (this.settings.stonesSkin == 2) {
            return ["st3", "stone3a", "stone3b"];
        } else if (this.settings.stonesSkin == 3) {
            return ["st4", "stone4a", "stone4b"];
        } else if (this.settings.stonesSkin == 4) {
            return ["st5", "stone5a", "stone5b"];
        }
    },

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

};

export default global;