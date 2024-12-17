input.onButtonPressed(Button.A, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Entertainer), music.PlaybackMode.LoopingInBackground)
})
input.onButtonPressed(Button.AB, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.LoopingInBackground)
})
music.setVolume(255)
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
strip.easeBrightness()
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        # # # # #
        . . # . .
        `)
    basic.pause(2000)
    basic.showString("Merry christmas!")
})
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    basic.pause(100)
})
