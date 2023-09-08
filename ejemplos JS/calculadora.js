

  function sumar(){
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var res = n1 + n2;

    alert("su resultado es: " + res);
    //return document.getElementById("resultado").innerHTML = res;
  }

  function restar(){
    let n1 =document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;

    let res= n1 - n2;
    alert("su resultado es: " + res);
  }

  function multiplicar(){
    let n1 =document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;

    let res= n1 * n2;
    alert("su resultado es: " + res);
  }

  function dividir(){
    let n1 =document.getElementById("num1").value;
    let n2=document.getElementById("num2").value;

    let res= n1 / n2;
    swal("Listo!", "El resultado de la division es. "+res+"\n \n La funcion se ejecuto correctamente", 'success');
  }