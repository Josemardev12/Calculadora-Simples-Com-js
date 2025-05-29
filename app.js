var num1 = Number(prompt("Digita um numero "));
var num2 = Number(prompt("Digita mais um numero "));


calc = prompt(" 1-soma / 2-divisao / 3-multiplicacao / 4-subtracao")


if(calc == 1){
     var soma = (num1 + num2)
     console.log(soma)
     document.writeln(soma)

}else if (calc == 2){

     var divisao = (num1 / num2)
     console.log(divisao)
     document.write(divisao)
    

}else if (calc == 3){

     var multiplicacao = (num1 * num2)
     console.log(multiplicacao)
     document.write(multiplicacao)

}else if(calc == 4){

     var subtracao = (num1 - num2)
     console.log(subtracao)
     document.write(subtracao)

}else{
     console.log("valor invalido") 
}




















