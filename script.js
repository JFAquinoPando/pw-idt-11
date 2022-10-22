function inrange(inputstr) {
    var num = parseInt(inputstr);
    alert(num);
    if (Number.isNaN(num)) {
        alert("Introduzca un valor entero");
    } else {
        if (num >= 1 && num <= 30) {
            alert("Esta dentro del rango");
        } else {
            alert("Esta fuera del rango");
        }
    }
}


let btnSubmit = document.querySelector("input[type='button']")
console.log(btnSubmit);
btnSubmit.addEventListener("click" , function(){
    const valor = document.getElementById("rango").value
    inrange(valor)
})