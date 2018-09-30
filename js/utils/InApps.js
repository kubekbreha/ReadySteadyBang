var InApps = function(game) {
    this.game = game;
};

InApps.prototype = {
    init: function(onPurchaseStart, onPurchaseError, onPurchaseComplete, onProductsLoaded) {
        var inApps = Cocoon && Cocoon.InApp ? Cocoon.InApp : null;
        this.inApps = inApps;

        if(inApps) {
            inApps.on("purchase", {
                start: function (productId) {
                    onPurchaseStart(productId);
                },

                error: function (productId, error) {
                    onPurchaseError(productId, error);
                },

                complete: function (purchase) {
                    onPurchaseComplete(purchase);
                }
            });

            inApps.initialize({autofinish: true}, function (error) {
                if(error) {
                    alert(JSON.stringify(error));
                } else {
                    var products = [
						""
                    ];

                    inApps.fetchProducts(products, function (products, error) {
                        if(error) {
                            alert(JSON.stringify(error));
                        } else {
                            onProductsLoaded(products);
                        }
                    });
                }
            });

            //inApps.setLudeiServerValidationHandler();
        }
    },

    getCachedProducts: function () {
        if(this.inApps) {
            return this.inApps.getProducts();
        }
    },
    
    purchase: function (id) {
        if(this.inApps) {
            this.inApps.purchase(id, 1);
        }
    },

    consume: function (id, amount, onError) {
        if(this.inApps) {
            this.inApps.consume(id, amount, function (error) {
                onError(error);
            });
        }
    }
};
