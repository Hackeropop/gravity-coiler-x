controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Gravity == 1) {
        mySprite.ax = -120
        mySprite.ax = 500
    } else {
    	
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    sprites.destroy(mySprite)
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    sprites.destroy(mySprite)
    game.gameOver(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Gravity == 0) {
        mySprite.ax = 500
        Gravity = 1
        mySprite.ay = 0
    } else {
        mySprite.ax = 0
        Gravity = 0
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile9`, function (sprite, location) {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.hearts)
    info.startCountdown(10)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(mySprite, 80, 0)
    animation.runImageAnimation(
    mySprite,
    assets.animation`blob walk`,
    400,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    game.splash("Remember, Dont go on the corrupt blocks because you will go through it.")
    tiles.placeOnTile(mySprite, tiles.getTileLocation(85, 8))
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.startEffect(effects.fire)
    sprites.destroy(mySprite)
    game.gameOver(false)
})
let Gravity = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . 
    . . . . . . . . 
    . . . 6 6 6 . . 
    . . 6 6 6 6 6 . 
    . 6 6 6 6 f 6 6 
    . 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 . 
    `, SpriteKind.Player)
scene.setBackgroundColor(12)
Gravity = 0
tiles.setCurrentTilemap(tileUtil.createSmallMap(tilemap`level4`))
tiles.placeOnTile(mySprite, tiles.getTileLocation(1, 6))
scene.cameraFollowSprite(mySprite)
mySprite.ay = 500
