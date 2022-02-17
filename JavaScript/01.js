nome = prompt("Bem Vindo!\nInsira seu nome por favor")
 idade = prompt("Bem Vindo!\nInsira sua idade")



 var maior = true

 function carregado() {


     elemento = document.getElementById("nome")
     elemento.innerHTML = nome

     elemento = document.getElementById("idade")
     elemento.innerHTML = idade


     if (idade < 18) {
         maior = false
         document.getElementById("maioridade").innerHTML = "não "
     }
 }

 function mostrarDados() {
     dados = ["Nome: ", nome, idade, " Anos ", "Maior de idade: ",
         maior
     ]
     alert(dados)
 }


 function calcular() {
     n1 = document.getElementById("n1").value
     n2 = document.getElementById("n2").value
     resultado = document.getElementById("resultado")
     resultado.innerHTML = parseFloat(n1) + parseFloat(n2)
     document.getElementById("n1").value = ""
     document.getElementById("n2").value = ""


 }

 function tabuada() {
     num = document.getElementById("num").value
     if (num == "") {
         document.getElementById("tabuadas").hidden = true
     } else {
         document.getElementById("tabuadas").hidden = false
     }

     i = 0
     while (i < 11) {
         document.getElementById("numero" + i).innerHTML = num
         document.getElementById("result" + i).innerHTML = num * i
         i++
     }
 }