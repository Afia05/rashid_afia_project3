music.setVolume(100)
while (true) {
    if (input.lightLevel() > 15 || input.soundLevel() > 150) {
        light.showAnimation(light.rainbowAnimation, 500)
        music.pewPew.loop()
    } else {
        light.clear()
        music.pewPew.stop()
    }
    
}
