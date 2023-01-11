function board() {
    for (let i = xb; i < (xb + yb); i++) {
        led.plot(i, 4)
    }
}
function left() {
    xb += 0 - 1
    basic.clearScreen()
    board()
    ball()
}
function right() {
    xb += 1
    basic.clearScreen()
    board()
    ball()
}
function ball() {
    led.plot(x, y)
}
function topside() {
    ydir = 1
    if (x == 0) {
        xdir = Math.randomRange(0, 2)
    } else if (x == 4) {
        xdir = Math.randomRange(0, 2) - 1
    } else {
        xdir = Math.randomRange(0, 3) - 1
    }
}
function leftside() {
    xdir = 1
}
function rightside() {
    xdir = -1
}
function corners() {
    xdir = 0 - xdir
    ydir = 0 - ydir
}
function checkhit() {
    if (xb - 1 < x && xb + yb > x) {
        scor += 1
        ydir = -1
        if (x == 0) {
            xdir = Math.randomRange(0, 2)
        } else if (x == 4) {
            xdir = Math.randomRange(0, 2) - 1
        } else {
            xdir = Math.randomRange(0, 3) - 1
        }
        if (scor > 1 && scor < 4) {
            yb += 0 - 1
        }
        if (scor > 5 && scor < 12) {
            time += 0 - 150
        }
    }
}
function moveball() {
    x += xdir
    y += ydir
    basic.clearScreen()
    ball()
    board()
    if (y == 0 && (x == 0 || x == 4)) {
        corners()
    } else if (x == 0 && y > 0 && y < 3) {
        leftside()
    } else if (x == 4 && y > 0 && y < 3) {
        rightside()
    } else if (y == 0) {
        topside()
    } else if (y == 3) {
        checkhit()
    } else if (y == 4) {
        gam = false
        basic.clearScreen()
        basic.pause(1000)
        basic.showNumber(scor)
        basic.pause(1000)
        basic.clearScreen()
        if (scor < 12) {
            basic.showIcon(IconNames.Sad)
        } else {
            basic.showIcon(IconNames.Happy)
        }
    }
}
input.onButtonPressed(Button.B, () => {
    right()
})
input.onButtonPressed(Button.A, () => {
    left()
})
basic.forever(() => {
    while (gam == true) {
        basic.pause(time)
        moveball()
    }
})
let x: number
x = 0
let y: number
y = 0
let xb: number
xb = 0
let yb: number
yb = 0
let xdir: number
xdir = 0
let ydir: number
ydir = 0
let scor: number
scor = 0
let gam: boolean
gam = true
let time: number
time = 1000
xb = 0
yb = 4
board()
x = 2
y = 0
ball()
xdir = 0
ydir = 1
