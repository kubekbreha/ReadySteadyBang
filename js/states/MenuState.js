import global from '../Globals.js'

import ScreenNewGame from '../screens/ScreenNewGame.js'
import ScreenRules from '../screens/ScreenRules.js'
import ScreenSettings from '../screens/ScreenSettings.js'
import ScreenInstructions from '../screens/ScreenInstructions.js'

class MenuState extends Phaser.State {

    create() {
        global.addBackground("game_bg");

        this.screenGroup = this.game.add.group();
        this.screenGroup.name = 'Menu';

        this.logo = this.add.sprite(0, 0, 'splash');

        var textStyle = {
            font: global.fonts.main,
            fill: "#FFFFFF",
            align: "center"
        };

        var buttonPlay = this.add.button((this.world.width / 2), (this.world.height / 2) + 30, 'PLAY_bt', this.clickStart, this);
        buttonPlay.anchor.set(0.5);
        var textPlay = this.add.text((this.world.width / 2), (this.world.height / 2) + 32, "PLAY", textStyle);
        textPlay.anchor.set(0.5, 0.5);

        textStyle = {
            font: global.fonts.small,
            fill: "#FFFFFF",
            align: "center"
        };

        var buttonRules = this.game.add.button((this.world.width / 2), (this.world.height / 2) + 130, 'bt_instruction_on', this.clickRules, this);
        buttonRules.anchor.set(0.5);
        var textRules = this.add.text((this.world.width / 2), (this.world.height / 2) + 132, "Rules", textStyle);
        textRules.anchor.set(0.5, 0.5);

        var buttonSettings = this.game.add.button((this.world.width / 2), (this.world.height / 2) + 210, 'bt_instruction_on', this.clickSettings, this);
        buttonSettings.anchor.set(0.5);
        var textSettings = this.add.text((this.world.width / 2), (this.world.height / 2) + 212, "Settings", textStyle);
        textSettings.anchor.set(0.5, 0.5);

        var buttonAbout = this.game.add.button((this.world.width / 2), (this.world.height / 2) + 290, 'bt_instruction_on', this.clickAbout, this);
        buttonAbout.anchor.set(0.5);
        var textAbout = this.add.text((this.world.width / 2), (this.world.height / 2) + 292, "Instructions", textStyle);
        textAbout.anchor.set(0.5, 0.5);

        var buttonExit = this.game.add.button(450, 770, 'X-ko', this.clickExit, this);
        buttonExit.anchor.set(0.5);

        // this.screenGroup.addChild(logo);
        this.screenGroup.addChild(buttonPlay);
        this.screenGroup.addChild(textPlay);
        this.screenGroup.addChild(buttonRules);
        this.screenGroup.addChild(textRules);
        this.screenGroup.addChild(buttonSettings);
        this.screenGroup.addChild(textSettings);
        this.screenGroup.addChild(buttonAbout);
        this.screenGroup.addChild(textAbout);
        this.screenGroup.addChild(buttonExit);
        this.screenGroup.visible = true;
    }

    showMenuButtons() {
        this.screenGroup.visible = true;
        this.logo.visible = true;
    }

    clickStart() {
        var newGame = new ScreenNewGame(this.game, this.world, this);
        newGame.showScreen();
        this.screenGroup.visible = false;
    }

    clickRules() {
        this.logo.visible = false;
        var screenRules = new ScreenRules(this.game, this.world, this);
        screenRules.showScreen();
        this.screenGroup.visible = false;
    }

    clickSettings() {
        this.logo.visible = false;
        var screenSettings = new ScreenSettings(this.game, this.world, this);
        screenSettings.showScreen();
        this.screenGroup.visible = false;
    }

    clickAbout() {
        this.logo.visible = false;
        var screenSettings = new ScreenInstructions(this.game, this.world, this);
        screenSettings.showScreen();
        this.screenGroup.visible = false;
    }

    clickExit() {
        console.log("Exit clicked");
    }
}

export default MenuState;