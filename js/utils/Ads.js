var Ads = function(game) {
    this.game = game;
    this.init();
};

Ads.prototype = {
    init: function() {
        var adMob = Cocoon && Cocoon.Ad ? Cocoon.Ad.AdMob : null;
        this.adMob = adMob;

        if(adMob) {
            adMob.configure({
                android: {
                    interstitial: "ca-app-pub-3940256099942544/5224354917"
                }
            });
        }
    },

    show: function (onComplete) {
        if(this.adMob) {
            var rewardedVideo = this.adMob.createRewardedVideo();

            rewardedVideo.on("load", function() {
                rewardedVideo.show();
            });

            rewardedVideo.on("fail", function() {
                onComplete(false);
            });

            rewardedVideo.on("reward", function(reward, error) {
                onComplete(!error);
            });

            rewardedVideo.load();
        }
    }
};
