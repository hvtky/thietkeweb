function showDe(){

    const spanText = document.querySelector('span')
    const icon = document.querySelector('i')
    const text = document.querySelector('ul')
    if(text.hidden){
        spanText.innerText = "Hide details"
        icon.classList.remove('bxs-right-arrow')
        icon.classList.add('bxs-down-arrow')
        text.removeAttribute('hidden')
    }else {
        spanText.innerText = "Show details"
        icon.classList.remove('bxs-down-arrow')
        icon.classList.add('bxs-right-arrow')
        text.setAttribute('hidden', 'hidden')
    }
}

const showDetails = document.querySelector('.show-details')
showDetails.addEventListener('click', showDe)