var Notifications = function(game) {
    this.game = game;
};

Notifications.prototype = {
    init: function(onReceive) {
        var local = Cocoon && Cocoon.Notification ? Cocoon.Notification.Local : null;
        this.local = local;

        if(local) {
            local.on("notification", function (userData) {
                onReceive(userData);
            });

            local.initialize({}, function (registered) {
                local.registered = registered;
            });
        }
    },

    send: function (message, time) {
        if(this.local) {
            var notification = {
                title: global.managers.language.get("title"),
                message: message,
                soundEnabled: true,
                badgeNumber: 0,
                userData: {},
                contentBody: "",
                contentTitle: "",
                date: time.toString(),
                icon: "notification_icon"
            };

            return this.local.send(notification);
        }
    },
    
    cancel: function (id) {
        if(this.local) {
            this.local.cancel(id);
        }
    },
    
    cancelAll: function () {
        if(this.local) {
            this.local.cancelAllNotifications();
        }
    }
};
