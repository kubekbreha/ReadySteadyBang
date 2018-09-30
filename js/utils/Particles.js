var Particles = function(x, y, count) {
    Phaser.Particles.Arcade.Emitter.call(this, global.phaser, x, y, count);

    this.makeParticles("particles");
    this.minParticleSpeed.setTo(-125, -125);
    this.maxParticleSpeed.setTo(125, 125);
    this.gravity = 0;

    this.explode = function (lifespan) {
        this.start(false, lifespan, 0, count, true);
        this.forEachAlive(function (particle) {
            global.phaser.add.tween(particle).to({alpha: 0}, lifespan, Phaser.Easing.Linear.None, true);
        });
    };

    this.fire = function (lifespan, frequency, count) {
        this.start(false, lifespan, frequency, count);
    };

    global.phaser.add.existing(this);

    return this;
};

Particles.prototype = Object.create(Phaser.Particles.Arcade.Emitter.prototype);
Particles.constructor = Particles;
