const game = new Phase.Game(800, 600, Phaser.AUTO, '', {

    preload: preload,
    create: create,

})

let platforms
let player 
var myGame;
var enemies = [];
var enemiesToKill = 8;
var enemiesRemaining = enemiesToKill;
var enemiesWhoAreSafe = true;





var preloadState = 
function preload () {

    game.load.image('sky', 'assets/skies/deepblue.png');
    game.load.image()
    game.load.image()
    game.load.spritesheet()


}
function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE)

    game.add.sprite()

    platforms = game.add.group()
    platforms.enableBody = true 

    let ground = platform.create(0, game.world.height - 64, 'ground')
    ground.scale.setTo(2,2)
    ground.body.immovable = true

    let ledge = platform.create(400, 450, 'ground')
    ledge.body.immovable = true

    ledge = platform.create(-75, 350, 'ground')
    ledge.body.immovable = true 


    player = game.add.sprite(32, game.world.height - 150, )
    game.physics.arcade.enable(player)
    player.body.bounce.y = 0.2
    player.body.gravity.y = 800
    player.body.collideWorldBounds = true 

    diamonds = game.add.group()
    diamonds.enableBody = true 

    for (var i = 0; i < 12; i++) {
        let diamond = diamonds.create(i * 70, 0, 'diamond')
        diamond.body.gravity.y = 1000
        diamond.body.bounce.y = 0.3 + Math.random() * 0.2
    }

    scoreText = game.add.text(16, 16, '', {fontSize: '32px', fill: '#000'})
    cursors = game.input.keyboard.createCursorKeys()


}


function update () {
    game.physics.arcade.collide(player, platforms)
    game.physics.arcade.collide(diamonds, platforms)
    game.physics.arcade.overlap(player, diamonds, collectDiamond, null, this)

    player.body.velocity.x = 0

    if (cursors.left.isDown) {
        player.body.velocity.x = -150
        player.animations.play('left')

    } else if (cursors.right.isDown) {
        player.body.velocity.x = 150
        player.animations.play('right')

    } else {
        player.animations.stop()
    }

    if(cursors.up.isDown && player.body.touching.down) {
        player.body.velocity.y = -400
    }

    if (score == 120) {
        alert('You win!')
        score = 10
    }

}

function collectDiamond (player, diamond) {
    diamond.kill()

    score += 10
    scoreText.text =  'Score:' + score


}
