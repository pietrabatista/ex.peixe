var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

var game = new Phaser.Game(config);

var crus;

function preload() {
    this.load.image('fundo', 'assets/bg_azul-escuro.png');

    //carregar o logo
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //carregar o peixe
    this.load.image('peixe', 'assets/peixes/crustaceo.png');

    this.load.image('bob', 'assets/bob.png');

    this.load.image('sandy', 'assets/sandy.gif');

    this.load.image('casa', 'assets/casa.png');

    this.load.image('ceu', 'assets/ceu.png');

}

function create() {
    this.add.image(400, 300, 'fundo');

    this.add.image(400,525, 'logo').setScale(0.5);

    this.add.image(70, 520, 'bob').setScale(0.3);

    this.add.image(670, 500, 'sandy').setScale(0.40);

    this.add.image(230, 500, 'casa').setScale(0.25);

    this.add.image(230, 200, 'ceu').setScale(0.2);

    this.add.image(600, 300, 'ceu').setScale(0.17);


    crus = this.add.image(400, 300, 'peixe').setScale(1.5);
    crus.setFlip(true, false);


}

function update() {

    crus.x = this.input.x;
    crus.y = this.input.y;
}
