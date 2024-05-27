

function check(){
    const digits = "0123456789"
    let temp
    const name = document.querySelector(".name").value
    const age = document.querySelector(".age").value
    if(name == '' && age == ''){
        alert('No name and no age')
        return false
    }
    else if(name != ''  && age == ''){
        alert('No age')
        return false
    }else if(name == ''  && age != ''){
        alert('No name')
        return false
    }else {
        for(let i = 0; i < age.length; i++){
            if(digits.indexOf(i) == -1){
                alert("Invalid age")
                return false
            }
        }
    }

    return true

}

const check = document.querySelector(".fms")
check.addEventListener('submit', check)