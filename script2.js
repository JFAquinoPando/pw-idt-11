function cambiar(valor) {
    if (valor == 1) {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/c/c1/Lionel_Messi_20180626.jpg";
    } else {
        imagen.src = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg";
    }
}

const imagen = document.getElementById("imagen")

imagen.addEventListener("mouseover", function(){
    cambiar(2)
})

imagen.addEventListener("mouseout", function(){
    cambiar(1)
})
