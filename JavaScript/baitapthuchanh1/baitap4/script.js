function total(){
    let show = document.querySelector("textarea").value.length
    document.querySelector(".total").value = show
}

const red = document.querySelector("textarea")
red.addEventListener('keyup' ,total)
red.addEventListener('mousemove')

