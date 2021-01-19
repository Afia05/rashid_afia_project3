music.set_volume(100)
while True:
    if input.light_level() > 15 or input.sound_level() > 150:
        light.show_animation(light.rainbowAnimation, 500)
        music.pew_pew.loop()
    else:
       light.clear()
       music.pew_pew.stop()
       