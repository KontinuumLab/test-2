input.onGesture(Gesture.Shake, function () {
    music.playMelody("E F G - G C - E ", 120)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- - - - - - - - ", 120)
})
