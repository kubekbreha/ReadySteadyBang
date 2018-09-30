class GameState extends Phaser.State {

    create() {
        console.log("in game state");
        global.game.self = this;

        this.playerMap = {};
        var testKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        testKey.onDown.add(Client.sendTest, this);
        // var map = game.add.tilemap('map');
        // map.addTilesetImage('tilesheet', 'tileset'); // tilesheet is the key of the tileset in map's JSON file
        // var layer;
        // for(var i = 0; i < map.layers.length; i++) {
        //     layer = map.createLayer(i);
        // }
        // layer.inputEnabled = true; // Allows clicking on the map ; it's enough to do it on the last layer
        // layer.events.onInputUp.add(Game.getCoordinates, this);
        Client.askNewPlayer();

    }


    getCoordinates(layer, pointer) {
        Client.sendClick(pointer.worldX, pointer.worldY);
    }

    addNewPlayer(id, x, y) {
        this.playerMap[id] = game.add.sprite(x, y, 'sprite');
    }

    movePlayer(id, x, y) {
        var player = this.playerMap[id];
        var distance = Phaser.Math.distance(player.x, player.y, x, y);
        var tween = this.game.add.tween(player);
        var duration = distance * 10;
        tween.to({
            x: x,
            y: y
        }, duration);
        tween.start();
    }

    removePlayer(id) {
        this.playerMap[id].destroy();
        delete this.playerMap[id];
    }
}