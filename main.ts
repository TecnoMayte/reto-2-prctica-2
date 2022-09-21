input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 175) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.ringTone(262)
    } else {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.stopAllSounds()
})
basic.forever(function () {
	
})
