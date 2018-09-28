import global from '../Globals.js'
import ScreenPause from '../screens/ScreenPause.js'

import Board from '../objects/Board.js'
import Checker from '../objects/Checker.js'
import GameHistory from '../objects/GameHistory.js'
import Player from '../objects/Player.js'

class GameState extends Phaser.State {

    create() {
        global.addBackground("game_bg");

        global.game.self = this;

        var textStyle = {
            font: "14px saira_medium",
            fill: "#eeeeee"
        };

        var buttonPause = this.game.add.button(100, 720, 'bt_undo', this.undoButtonAction, this);
        buttonPause.anchor.set(0.5);
        var textPause = this.game.add.text(100, 735, "UNDO", textStyle);
        textPause.anchor.set(0.5)

        var buttonRestart = this.game.add.button(this.game.world.centerX + 5, 720, 'bt_restart', this.clickRestartGame, this);
        buttonRestart.anchor.set(0.5);
        var textRestart = this.game.add.text(this.game.world.centerX + 5, 735, "RESTART", textStyle);
        textRestart.anchor.set(0.5)

        var buttonMenu = this.game.add.button(this.game.world.centerX + 150, 720, 'bt_menu', this.clickMenu, this);
        buttonMenu.anchor.set(0.5);
        var menuText = this.game.add.text(this.game.world.centerX + 150, 735, "MENU", textStyle);
        menuText.anchor.set(0.5)

        this.startGame();
    }

    /*
     * Main, start game.
     */
    startGame() {
        var playerStones = global.getStonesSprites();
        this.board = new Board(this.game, this.world);
        let player1 = new Player(this.game, this.board, playerStones, "1");
        let player2 = new Player(this.game, this.board, playerStones, "2");
        this.board.setPlayers(player1, player2);
    }

    /*
     * Restart button listener.
     */
    clickRestartGame() {
        //TODO -> remove old objects from board, this just create new one over that old ones
        this.startGame();
    }

    /*
     * Menu button listener.
     */
    clickMenu() {
        this.camera.fade(0x000000, 200, false);
        this.time.events.add(200, function() {
            this.game.state.start('Menu');
        }, this);
    }

    /*
     * Pause button listener.
     */
    clickPause() {
        var pause = new ScreenPause(this.game);
        pause.showScreen();

        // this.game.paused = true;
        // this.menuBackground = this.game.add.sprite(60, 100, 'background');
        // this.menuBackground.scale.x = 0.75;
        // this.menuBackground.scale.y = 0.75;

        // this.choiseLabel = this.game.add.text(this.world.height / 4, this.world.height - 150, 'Click outside menu to continue', {
        //     font: '30px Arial',
        //     fill: '#fff'
        // });
        // this.choiseLabel.anchor.setTo(0.5, 0.5);
    }

    unpause(event) {
        // Only act if paused
        if (this.game.paused) {
            // Remove the menu and the label

            this.menuBackground.destroy();
            // this.choiseLabel.destroy();

            // Unpause the game
            this.game.paused = false;
        }
    };


    undoButtonAction() {
        //     if (this.history.getLastRowDest() != -1) {
        //
        //         this.board.makeCheckerMove(this.history.getLastRowFrom(), this.history.getLastColFrom(),
        //             this.history.getLastRowDest(), this.history.getLastColDest());
        //
        //         if (this.history.isKickedOut()) {
        //             this.board.addSingleCheckerToBoard(this.history.getLastRowKicked(), this.history.getLastColKicked(),
        //                 this.history.getBoard()[this.history.getLastRowKicked()][this.history.getLastColKicked()].isKing());
        //         }
        //
        //         this.board.setGameBoardCheckers(this.history.getBoard());
        //         this.history.clearHistory();
        //     }
    }

}

export default GameState;