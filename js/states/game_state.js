class GameState extends Phaser.State {

    create() {
        console.log("in game state");
        global.game.self = this;


    }
}