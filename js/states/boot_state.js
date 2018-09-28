import global from '../globals.js'

class BootState extends Phaser.State {

    create() {

        this.game.stage.backgroundColor = 0x6f6f6f;
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = false;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        if (global.version == global.versions.HTML) {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.game.canvas.oncontextmenu = function(e) {
                e.preventDefault();
            };

            window.addEventListener("touchend", function() {
                try {
                    if (global.phaser.sound.context.state !== 'running') {
                        global.phaser.sound.context.resume();
                    }
                } catch (err) {

                }
            }, false);

            if (!this.game.device.desktop) {
                //PPS_DELETE-DISABLE_ORIENTATION_CHECK
                var userAgent = navigator.userAgent || navigator.vendor || window.opera;
                var runningOnIOS = userAgent.match(/iPad/i) || userAgent.match(/iPhone/i) || userAgent.match(/iPod/i);
                var self = this;

                window.onresize = function() {
                    self.checkOrientation(runningOnIOS);
                };

                this.checkOrientation(runningOnIOS);
                //PPS_DELETE-DISABLE_ORIENTATION_CHECK
            }
        } else {
            this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
            this.scale.setUserScale(global.screenDims.scaleX, global.screenDims.scaleY);

            if (!this.game.device.desktop) {
                if (global.screenDims.orientation == global.orientations.portrait) {
                    this.scale.forceOrientation(false, true);
                } else {
                    this.scale.forceOrientation(true, false);
                }
            }
        }

        this.game.state.start("Preloader");
    }


    checkOrientation(runningOnIOS) {
        var width;
        var height;

        if (runningOnIOS) {
            width = document.documentElement.clientWidth;
            height = document.documentElement.clientHeight;
        } else {
            width = window.innerWidth;
            height = window.innerHeight;
        }

        if (global.orientation == global.orientations.portrait && width > height || global.orientation == global.orientations.landscape && height > width) {
            global.phaser.paused = true;
            document.getElementById("content").style.display = "block";
        } else {
            global.phaser.paused = false;
            document.getElementById("content").style.display = "none";
        }
    }


}

export default BootState;