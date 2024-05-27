
function tinhTong(){
    const nb1 = document.querySelector(".nb1").value
    const nb2 = document.querySelector(".nb2").value
    document.querySelector(".tt").value = Number(nb1) + Number(nb2)
}
function tinhHieu(){
    const nb1 = document.querySelector(".nb1").value
    const nb2 = document.querySelector(".nb2").value
    document.querySelector(".tt").value = Number(nb1) - Number(nb2)
}
function tinhTich(){
    const nb1 = document.querySelector(".nb1").value
    const nb2 = document.querySelector(".nb2").value
    document.querySelector(".tt").value = Number(nb1) * Number(nb2)
}
function tinhThuong(){
    const nb1 = document.querySelector(".nb1").value
    const nb2 = document.querySelector(".nb2").value
    document.querySelector(".tt").value = Number(nb1) / Number(nb2)
}


const cong = document.querySelector(".cong")
const tru = document.querySelector(".tru")
const nhan = document.querySelector(".nhan")
const chia = document.querySelector(".chia")
cong.addEventListener('click', tinhTong)
tru.addEventListener('click', tinhHieu)
nhan.addEventListener('click', tinhTich)
chia.addEventListener('click', tinhHieu)
