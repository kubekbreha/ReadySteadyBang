var Button = function(x, y, key, frame, text, callback, numberFrame) {
    var enabled = true;
    var btnText;

    var group = global.phaser.add.group();
    group.x = x;
    group.y = y;

    var button = global.phaser.add.button(0, 0, key, function () {
        if(enabled) {
            callback(group);
        }
    }, this);
    button.anchor.setTo(0.5);
    group.add(button);

    if(text) {
        btnText = global.phaser.add.text(0, 0, text, { font: global.fonts.btn, fill: "#FFFFFF", align: "center" });
        btnText.anchor.setTo(0.5);
        group.add(btnText);
    }

    if(numberFrame) {
        button.animations.frame = frame;
    } else if(frame != null) {
        button.frameName = frame;
    }

    group.properties = {
        setSize: function (w, h) {
            button.width = w;
            button.height = h;
        },

        setEnabled: function (value) {
            enabled = value;

            if(btnText) {
                btnText.tint = value ? 0xFFFFFF : 0xAAAAAA;
            } else {
                button.tint = value ? 0xFFFFFF : 0x999999;
            }
        }
    };

    return group;
};
