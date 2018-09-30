class MenuState extends Phaser.State {

    create() {
        console.log("in menu state");

        this.game.state.start("Game");
    }
}