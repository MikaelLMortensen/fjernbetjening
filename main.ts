input.onButtonPressed(Button.AB, function () {
    leftSpeed = 0
    rightSpeed = 0
    radio.sendValue("both", 0)
    basic.clearScreen()
})

input.onButtonPressed(Button.A, function () {
    setLeftSpeed()
})

function setLeftSpeed() {
    if (leftSpeed >= 100)
    {
        leftUp = false
    }
 
    if (leftSpeed <= 0)
    {
        leftUp = true
    }
 
    if (leftUp)
    {
        leftSpeed = leftSpeed + 10
    } else {
        leftSpeed = leftSpeed - 10
    }
    radio.sendValue("left", leftSpeed)
    setArrow()   
}

input.onButtonPressed(Button.B, function () {
    setRightSpeed()
})

function setRightSpeed() {
    if (rightSpeed >= 100)
    {
        rightUp = false
    }
 
    if (rightSpeed <= 0)
    {
        rightUp = true
    }
 
    if (rightUp)
    {
        rightSpeed = rightSpeed + 10
    } else {
        rightSpeed = rightSpeed - 10
    }
    radio.sendValue("right", rightSpeed)
    setArrow()
}

function setArrow(){
    if (leftSpeed > rightSpeed){
        basic.showArrow(ArrowNames.East)
    } else if (rightSpeed > leftSpeed){
        basic.showArrow(ArrowNames.West)
    } else {
        basic.showArrow(ArrowNames.North)
    }

}

let rightSpeed = 0
let leftSpeed = 0
let leftUp = true
let rightUp = true

radio.setGroup(1)
basic.forever(function () {
	
})
