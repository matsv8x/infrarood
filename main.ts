let IR_waarde = IR.IR_read()
let links = 29
let rechts = 16
let vooruit = 8
let achteruit = 5
let stop = 141
basic.forever(function () {
    if (IR_waarde == vooruit) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if (IR_waarde == achteruit) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if (IR_waarde == links) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (IR_waarde == rechts) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
