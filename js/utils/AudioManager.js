var AudioManager = function(game) {
    this.game = game;
};

AudioManager.prototype = {
    music: [],
    sounds: [],
    actualMusic: null,

    addMusic: function(key, volume, loop) {
        this.music[key] = this.game.add.audio(key, volume, loop);

        if(this.actualMusic == null) {
            this.actualMusic = key;
        }
    },

    addSound: function(key, volume, loop) {
        this.sounds[key] = this.game.add.audio(key, volume, loop);
    },

    playMusic: function(key, reset) {
        if (key != this.actualMusic || reset) {
            if(global.storage.data.music) {
                this.stopMusic();
                this.music[key].play();
                this.music[key].volume = global.storage.data.music;
            }

            this.actualMusic = key;
        }
    },

    playSound: function(key) {
        if(global.storage.data.sounds) {
            this.sounds[key].play();
            this.sounds[key].volume = global.storage.data.sounds;
        }
    },

    stopSound: function(key) {
        this.sounds[key].stop();
    },

    setSoundPitch: function (key, pitch) {
        this.sounds[key]._sound.playbackRate.value = pitch;
    },

    pauseMusic: function() {
        if(this.actualMusic != null && global.storage.data.music) {
            this.music[this.actualMusic].pause();
        }
    },

    resumeMusic: function() {
        if(this.actualMusic != null && global.storage.data.music) {
            this.music[this.actualMusic].resume();
        }
    },

    stopMusic: function() {
        if(this.actualMusic != null) {
            this.music[this.actualMusic].stop();
        }
    },

    setMusicVolume: function (volume) {
        global.storage.data.music = volume;

        if(this.actualMusic != null) {
            this.music[this.actualMusic].volume = volume;
        }
    },

    toggleMusic: function() {
        global.storage.data.music = !global.storage.data.music;

        if(global.storage.data.music && this.actualMusic != null){
            this.playMusic(this.actualMusic, true);
        } else {
            this.stopMusic();
        }
    },

    toggleSounds: function() {
        global.storage.data.sounds = !global.storage.data.sounds;

        if(!global.storage.data.sounds) {
            for (var key in this.sounds){
                if(this.sounds.hasOwnProperty(key)) {
                    this.sounds[key].stop();
                }
            }
        }
    }
};
