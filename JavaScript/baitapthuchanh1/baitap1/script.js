function show(){
    let result = document.getElementById("result")
    result.value = 'Chao ban'
}

const button = document.querySelector("button")
button.addEventListener('click', show)