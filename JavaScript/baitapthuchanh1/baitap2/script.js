function changeRed(){
    let backgroundColor = document.querySelector(".none1")
    backgroundColor.style.backgroundColor = '#BE3636C6'
}

function changeBLue(){
    let backgroundColor = document.querySelector(".none2")
    backgroundColor.style.backgroundColor = '#137E63FF'
}

const red = document.querySelector(".red")
red.addEventListener('click' ,changeRed)
const blue = document.querySelector(".blue")
blue.addEventListener('click' ,changeBLue)