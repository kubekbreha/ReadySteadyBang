var StorageManager = function() {

};

StorageManager.prototype = {
    save: function() {
        try {
            localStorage.setItem(global.storage.name, JSON.stringify(global.storage.data));
        } catch(e) {
            console.log("Failed to save game data!");
        }
    },

    load: function() {
        try {
            var data = JSON.parse(localStorage.getItem(global.storage.name));

            if(data != null) {
                global.storage.data = data;
			}
        } catch(e) {
            console.log("Failed to load game data!");
        }
    }
};
