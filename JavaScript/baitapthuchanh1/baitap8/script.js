let luachon

alert("Bạn muốn mở trang web nào\n1. Mở Facebook\n2. HUST Edu")

luachon = prompt("Bạn hãy nhập lựa chọn của mình để mở trang web: ")

switch (luachon){
    case '1' : window.open("https://www.facebook.com")
        break
    case '2' : window.open("https://www.ou.edu.vn")
        break
    default : window.open("https://www.google.com")
        break
}
