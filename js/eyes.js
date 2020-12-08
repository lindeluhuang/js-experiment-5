const irisLeft = document.querySelector("div.iris-left")
const irisRight = document.querySelector("div.iris-right")

// set interval
let interval = null

// move eyes every 3 seconds
const startInterval = function () {
    clearInterval(interval)
    interval = setInterval(() => {
        const x = Math.random() * window.innerWidth
        const y = Math.random() * window.innerHeight

        moveEye(irisLeft, x, y)
        moveEye(irisRight, x, y)

    }, 3000)
}

const moveEye = function (tag, mouseX, mouseY) {
    // center of the eye
    const eyeMidX = tag.getBoundingClientRect().left
    const eyeMidY = tag.getBoundingClientRect().top

    // find difference between eye and mouse
    const diffX = mouseX - eyeMidX
    const diffY = mouseY - eyeMidY - window.pageYOffset

    // pythagorus theorem
    const diff = Math.sqrt(diffX * diffX + diffY * diffY)

    // capped radisu
    const radius = Math.min(3, diff)

    // tan in math
    const angle = Math.atan2(diffY, diffX)

    // get capped version, based off angle
    const cappedX = radius * Math.cos(angle)
    const cappedY = radius * Math.sin(angle)

    const eyeTag = tag.querySelector("div")

    eyeTag.style.left = cappedX + "px"
    eyeTag.style.top = cappedY + "px"
}

// start interval
startInterval()

document.addEventListener("mousemove", function(event) {
    startInterval()
    moveEye(irisLeft, event.pageX, event.pageY)
    moveEye(irisRight, event.pageX, event.pageY)
}) 