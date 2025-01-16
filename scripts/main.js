const evilButton = document.getElementById('evil-button')
// Whenever our mouse gets within 100 px of our button, we want to move our button
const OFFSET = 100

evilButton.addEventListener('click', () => {
    alert('Thank you! I appreciate that, high-five!')
    window.close()
})


document.addEventListener('mousemove', (e) => {
    // Gets the x and y of the mouse
    const x = e.pageX
    const y = e.pageY
    // console.log(x, y)

    // Gets the hight and width of the button
    // console.log(buttonBox.x, buttonBox.y) = (0,0)
    const buttonBox = evilButton.getBoundingClientRect()
    // console.log(buttonBox.x, buttonBox.y) 

    // This gets the distance of the mouse from different areas of the box
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

    // This is how far away do we want to be from the button before we start moving our cursor
    const horizontalOffset =buttonBox.width / 2 + OFFSET
    const verticalOffset =buttonBox.height / 2 + OFFSET

    // Math that determines where our button needs to be

    // Distance from our cursor to button is less than the offset we specified 
    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
            buttonBox.x + horizontalOffset / horizontalDistanceFrom * 5,
            buttonBox.y + verticalOffset / verticalDistanceFrom * 5,
        )
    }
})

function setButtonPosition(left, top) {

    // Gets the size of the window box to check if our button is...
    // ...overlapping the edge of our window
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()

    // Sets the button to overlap/transfer to the other side of the page,..
    // ...if it's halfway point meets the edge of the page/window

    // Gone off the left side of the page
    if (distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
        left = windowBox.right - buttonBox.width - OFFSET
    }
    // Gone off the right side of the page
    if (distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
        left = windowBox.left + OFFSET
    }
    // Gone off the top of the page
    if (distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
        top = windowBox.bottom - buttonBox.height - OFFSET
    }
    // Gone off the bottom of the page
    if (distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
        top = windowBox.top + OFFSET
    }
    
    // Sets the position of the buttom using string interpolation
    evilButton.style.left = `${left}px`
    evilButton.style.top = `${top}px`
}

// Gets the position of the mouse from the center of the button
function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    // (x of the box, x of the mouse, the width of the box)
    return boxPosition - mousePosition + boxSize / 2
    }