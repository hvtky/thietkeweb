
function dg(){
    const dg = document.querySelector(".dg").value
    const sl = document.querySelector(".sl").value
    document.querySelector(".tt").value = Number(sl) * Number(dg)
}


const dongia = document.querySelector(".dg")
dongia.addEventListener('keyup', dg)
