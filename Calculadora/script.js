
function escrever(Numero1){
  
  var Numero2 = document.getElementById('resultado').value += Numero1;
  
}

 function resultado1(num){

  var Cont = document.getElementById("resultado").value;
  
  try {
    
    document.getElementById("resultado").value = eval(Cont);

  }
  catch(err) {
   
    document.getElementById("resultado").value = "Erro de operação.";//err.message"";
    
  }
 
}