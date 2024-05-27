const listPhoto = [
    'images/deepdish.jpg',
    'images/flatbread.jpg',
    'images/frenchbread.jpg',
    'images/neapolitan.jpg',
    'images/nypizza.jpg',
    'images/squarepan.jpg'
]

function createImage(src) {
    const img = document.createElement('img')
    img.src = src
    return img
}
function nextImg(event){
    if(event.key == 'Escape'){
        const image = document.querySelector('#detail')
        document.removeEventListener('keydown', nextImg)
        modalView.removeChild(image)
        modalView.removeAttribute('id')
    }
    else if(event.key == 'ArrowRight'){
        if(nbIndex >= 0 && nbIndex < listPhoto.length-1){
            const indexListPhoto = listPhoto[++nbIndex]
            const image = document.querySelector('#detail')
            image.src = indexListPhoto
        }
    }else if(event.key == 'ArrowLeft'){
        if(nbIndex > 0 && nbIndex <= listPhoto.length-1){
            const indexListPhoto = listPhoto[--nbIndex]
            const image = document.querySelector('#detail')
            image.src = indexListPhoto
        }
    }
}
function onThumbnailClick(event) {
    const targetIndex = event.target.getAttribute('data-index')
    const src = event.target.src.substring(event.target.src.indexOf('baitap2') + 8,)
    const img = createImage(src)
    img.setAttribute('id' ,'detail')
    modalView.appendChild(img)
    modalView.setAttribute('id', 'modal-view')
    nbIndex = Number(targetIndex)
    document.addEventListener('keydown', nextImg)
}

const albumView = document.querySelector('#album-view')
for (let i = 0; i < listPhoto.length; i++) {
    const photoSrc = listPhoto[i]
    const image = createImage(photoSrc)
    image.dataset.index = i
    image.addEventListener('click', onThumbnailClick)
    albumView.appendChild(image)
}

const modalView = document.querySelector('.hide')
