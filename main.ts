input.onPinReleased(TouchPin.P2, function () {
    music.ringTone(294)
    led.enable(true)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    music.stopAllSounds()
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Asleep)
    basic.showIcon(IconNames.Asleep)
    control.reset()
})
input.onGesture(Gesture.Shake, function () {
    music.ringTone(294)
    led.enable(true)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
    basic.showIcon(IconNames.Sad)
    music.ringTone(220)
})
music.setVolume(224)
basic.showIcon(IconNames.Asleep)
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
