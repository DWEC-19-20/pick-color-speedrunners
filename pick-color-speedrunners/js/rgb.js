

var input = document.querySelectorAll("input");

for(var i=0;i<input.length;i++){

    input[i].addEventListener("input", function(){

        var red = document.getElementById("red").value,
            green = document.getElementById("green").value,
            blue = document.getElementById("blue").value;

        var display = document.getElementById("display");

        display.style.background = "rgb(" + red + ", " + green + ", " + blue + ")";

    });

}



document.getElementById("enviar").addEventListener("click",function(e){

    var r= parseInt(document.getElementById("r").value);
    
    var g = parseInt(document.getElementById("g").value);
  
    var b= parseInt(document.getElementById("b").value);
  
    var valorHex = "#" + rgb(r,g,b);
  
    document.getElementById("hex").value = valorHex;

    document.getElementById("red").value = r;

    document.getElementById("green").value = g;

    document.getElementById("blue").value = b;

  });


  function rgb(r,g,b){

    return ('#'+formato(hex(r))+''+formato(hex(g))+''+formato(hex(b))).toUpperCase();

  }


  function hex(v){
 
    var hex= v.toString(16);
    
    if (v < 16){
    
       hex = "0" + hex;
    
    }
    
    return hex;
    
    }

    function formato(z){

      if (z>255){

        z=255;
      
      }else if(z<0){

        z=0;

      }

      return z;

    }

    //Cambia el color del display segun el numero en RGB introducido

  function myFuntion(){

    var r= parseInt(document.getElementById("r").value);
    
    var g = parseInt(document.getElementById("g").value);
  
    var b= parseInt(document.getElementById("b").value);
  
    var valorHex = "#" + hex(r) + hex(g) + hex(b);

    document.getElementById("display").style.backgroundColor=valorHex;

}

document.getElementById("convert").addEventListener("click",function(e){

  var rgb= document.getElementById("x").value;

  if(rgb.charAt(0) == '#') rgb = rgb.replace('#','');

  var r = parseInt(rgb.substr(0,2),16);

  var g = parseInt(rgb.substr(2,2),16);

  var b = parseInt(rgb.substr(4),16);

  document.getElementById("Crgb").value=r+' '+g+' '+b;

});