input.onButtonPressed(Button.A, function () {
    tijd += -5
    if (tijd < 0) {
        tijd = 0
    }
    basic.showNumber(tijd)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(tijd)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    tijd += 5
    basic.showNumber(tijd)
    basic.clearScreen()
})
let tijd = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
tijd = 0
let timer = input.runningTime()
let tint = 0
let helderheid = 50
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (tijd != 0) {
        if (tijd < 5) {
            helderheid = tijd * 10
        } else {
            helderheid = 50
        }
        strip.showColor(neopixel.hsl(tint, 100, helderheid))
        tint += 0.1
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if (input.runningTime() - timer >= 60000) {
        tijd += -1
        timer = input.runningTime()
    }
    if (tijd < 0) {
        tijd = 0
    }
})
