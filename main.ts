/**
 * Homescreen
 */
/**
 * Programm:e
 */
input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    music.playTone(659, music.beat(BeatFraction.Whole))
})
let Programm_Musik_Song = 0
let Programm_MusikPlay_Pause = 0
let Standby = 0
let Programm_Musik = 0
let Programm_Taschenrechner = 0
let Messenger_Variable_1 = 0
basic.setLedColor(0xff0000)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . . .
    . # # . .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . . . # .
    . . . . .
    `)
basic.pause(100)
basic.showLeds(`
    . . . . .
    . . # # .
    . . . # .
    . # # # .
    . . . . .
    `)
let Homescreen_1 = 1
basic.turnRgbLedOff()
basic.forever(function () {
    if (Homescreen_1 == 1) {
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Messenger_Variable_1 = 1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Taschenrechner = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (Homescreen_1 == 3) {
        basic.showIcon(IconNames.EigthNote)
        if (pins.digitalReadPin(DigitalPin.P1) == 1) {
            Homescreen_1 = 0
            Programm_Musik = 1
        }
        if (input.buttonIsPressed(Button.A)) {
            Homescreen_1 += -1
        }
        if (input.buttonIsPressed(Button.B)) {
            Homescreen_1 += 1
        }
    }
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB) && Homescreen_1 == 0) {
        Homescreen_1 = 1
        music.playTone(147, music.beat(BeatFraction.Whole))
    }
    if (Homescreen_1 > 0) {
        Messenger_Variable_1 = 0
        Programm_Musik = 0
        Programm_Taschenrechner = 0
        basic.turnRgbLedOff()
        if (input.buttonIsPressed(Button.AB)) {
            basic.setLedColor(0xff0000)
            Homescreen_1 = 0
            Standby = 1
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        }
    }
    if (Standby == 1 && input.buttonIsPressed(Button.AB)) {
        Homescreen_1 = 1
    }
})
basic.forever(function () {
    if (Programm_Musik == 1) {
        if (Programm_MusikPlay_Pause == 0) {
            basic.showLeds(`
                . # . . .
                . # # . .
                . # # # .
                . # # . .
                . # . . .
                `)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_MusikPlay_Pause = 1
            }
        } else if (Programm_MusikPlay_Pause == 1) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                . # . # .
                `)
            if (pins.digitalReadPin(DigitalPin.P1) == 1) {
                Programm_MusikPlay_Pause = 0
                music.stopAllSounds()
            }
        }
    }
})
basic.forever(function () {
    if (Messenger_Variable_1 == 1) {
        basic.showLeds(`
            # # . # #
            # . . . #
            # . . . #
            # . . . #
            # # . # #
            `)
    }
})
basic.forever(function () {
    if (Programm_Taschenrechner == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (Programm_MusikPlay_Pause == 1) {
        Programm_Musik_Song = Math.map(pins.analogReadPin(AnalogPin.P2), 0, 1023, 1, 4)
        if (Programm_Musik_Song == 1) {
            basic.showNumber(1)
            music.playMelody("C5 B A G F E D C ", 270)
            music.playMelody("C D E F G A B C5 ", 248)
            music.playMelody("E B C5 A B G A F ", 248)
            music.playMelody("A F E F D G E F ", 326)
            music.playMelody("C5 A B G A F G E ", 259)
            music.playMelody("G B A G C5 B A B ", 244)
            music.playMelody("B A G A G F A C5 ", 255)
            music.playMelody("G F G A - F E D ", 307)
            music.playMelody("E D G F B A C5 B ", 248)
            music.playMelody("C5 G B A F A C5 B ", 263)
        }
        if (Programm_Musik_Song == 2) {
            music.playMelody("E G D A B G C5 D ", 118)
            music.playMelody("F G A B E C5 D C ", 118)
            music.playMelody("E B C5 A G D F E ", 118)
            music.playMelody("C G F B D A C C5 ", 120)
        }
    }
})
