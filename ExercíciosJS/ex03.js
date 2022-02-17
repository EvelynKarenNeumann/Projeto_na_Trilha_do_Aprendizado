var n1,n2,n3,n4,media

n1=prompt("Digite a 1ª nota do aluno: ")
n2=prompt("Digite a 2ª nota do aluno: ")
n3=prompt("Digite a 3ª nota do aluno: ")
n4=prompt("Digite a 4ª nota do aluno: ")

media=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3)+parseFloat(n4))/4

if(media>=9 && media<=10){
    alert("Conceito A (9 a 10), pois a média do aluno é "+media)
}
else{
    if(media<9 && media>=8)
    {
        alert("Conceito B (8 a 8.9), pois a média do aluno é "+media)
    }
    else{
        if(media<8 && media>=7)
        {
            alert("Conceito C (7 a 7.9), pois a média do aluno é "+media)
        }
        else
        {
            alert("Conceito D (nota<7), pois a média do aluno é "+media)
        }
    }
}