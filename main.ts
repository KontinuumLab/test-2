let SubeBaja = 0
let x = 120
basic.forever(function () {
    if (x <= 120) {
        SubeBaja = 1
    }
    if (x >= 250) {
        SubeBaja = 0
    }
    if (SubeBaja == 1) {
        x = x + 1
    }
    if (SubeBaja == 0) {
        x = x - 1
    }
    music.ringTone(x)
})
