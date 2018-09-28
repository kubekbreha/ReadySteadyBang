import global from '../Globals.js'

class GameState extends Phaser.State {

    create() {
        global.game.self = this;


    }
}

export default GameState;