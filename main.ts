namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
function doSomething () {
    music.playMelody("E - - - E - F - ", 480)
    music.playMelody("G - - - E - - - ", 480)
    music.playMelody("F - - - F - G - ", 480)
    music.playTone(294, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
}
music.setTempo(480)
scene.setBackgroundColor(15)
for (let index = 0; index < 4; index++) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(196, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    scene.setBackgroundImage(img`
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
    music.rest(music.beat(BeatFraction.Double))
    music.rest(music.beat(BeatFraction.Whole))
}
doSomething()
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
music.playMelody("E - - - E - F - ", 480)
music.playMelody("G - - - C5 - - - ", 480)
music.playMelody("A - - - - - E F ", 480)
music.playMelody("G - - - - - - - ", 480)
doSomething()
music.playMelody("E - - - E - F - ", 480)
music.playTone(294, music.beat(BeatFraction.Whole))
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
music.rest(music.beat(BeatFraction.Double))
music.rest(music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
scene.setBackgroundImage(img`
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
music.rest(music.beat(BeatFraction.Double))
music.rest(music.beat(BeatFraction.Whole))
scene.setBackgroundImage(img`
. . . . . . . . . . . . . . . . . . . . . 
. . . . . . c c c . . . c c c . . . . . . 
. . . . . c 5 5 5 c c c 5 5 5 c . . . . . 
. . . . c 5 5 c c 1 1 1 c c 5 5 c . . . . 
. . c c c c c 1 1 1 1 1 1 1 c c c c c . . 
. c 5 5 5 c 1 1 1 c 1 c 1 1 1 c 5 5 5 c . 
c 5 5 5 5 c 1 1 1 1 1 1 1 1 1 c 5 5 5 5 c 
. c 5 5 5 c 1 1 c 1 1 1 c 1 1 c 5 5 5 c . 
. . c c c 5 c 1 1 c c c 1 1 c 5 c c c . . 
. . . c 5 5 5 c 1 1 1 1 1 c 5 5 5 c . . . 
. . c 5 5 5 5 5 c c c c c 5 5 5 5 5 c . . 
. . c 5 5 5 5 5 c 7 7 c c 5 5 5 5 5 c . . 
. . . c 5 5 5 c c 7 7 c c c 5 5 5 c . . . 
. . . . c c c . c 7 7 c . . c c c . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . . c 7 c . . . . . . . . 
. . . . . . . . . c 7 7 c . . . . . . . . 
. . . . . . . . . c 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 c . . . . . . . . . 
. . . . . . . . c 7 7 7 c . . . . . . . . 
. . . . . . . . . c c c . . . . . . . . . 
`)
music.playMelody("C - - - - - - - ", 480)
music.playMelody("C5 - - - - - - - ", 480)
