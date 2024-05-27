function myFunctionLeft() {
    var e = document.getElementById("id_level").value;
    if(Number(e) >= 1 && Number(e) <= 28 ){
        document.getElementById("left").style.visibility  = 'visible';
        document.getElementById("right").style.visibility  = 'visible';
    }
    if(e == "1"){
        // document.getElementById("id_level").value = 2;
        document.getElementById("left").style.visibility  = 'hidden';
    }
    else {
        document.getElementById("id_level").value = `${Number(e)-1}`;
        document.getElementById("view1-1").src = `./grip/question/view1/lv${Number(e)-1}.PNG`;
        document.getElementById("view2-2").src = `./grip/question/view2/lv${Number(e)-1}.PNG`;
    }

}
function myFunctionRight(){
    var e = document.getElementById("id_level").value;
    if(Number(e) >= 1 && Number(e) <= 28 ){
        document.getElementById("left").style.visibility  = 'visible';
        document.getElementById("right").style.visibility  = 'visible';
    }
    if(e == "28"){
        document.getElementById("right").style.visibility  = 'hidden';
    }
    else {
        document.getElementById("id_level").value = `${Number(e)+1}`;
        document.getElementById("view1-1").src = `./grip/question/view1/lv${Number(e)+1}.PNG`;
        document.getElementById("view2-2").src = `./grip/question/view2/lv${Number(e)+1}.PNG`;
    }
}
function myFunctionSelectLevel(){
    var e = document.getElementById("id_level").value;
    document.getElementById("id_level").value = `${Number(e)}`;
    document.getElementById("view1-1").src = `./grip/question/view1/lv${Number(e)}.PNG`;
    document.getElementById("view2-2").src = `./grip/question/view2/lv${Number(e)}.PNG`;
}

function functionRusule(){
    var e = document.getElementById("id_level").value;
    document.getElementById("view1-1").src = `./grip/answer/view1/lv${Number(e)}.PNG`;
    document.getElementById("view2-2").src = `./grip/answer/view2/lv${Number(e)}.PNG`;
}