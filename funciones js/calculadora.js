//variables globales
var numeroa;
var numerob;
var operacion;

// variables 

function init(){
    var resultado=document.getElementById ("resultado");
    var suma=document.getElementById ("suma");
    var resta=document.getElementById ("resta");
    var multiplicacion=document.getElementById ("multiplicacion");
    var division=document.getElementById ("division");
    var reset=document.getElementById ("reset");
    var igual=document.getElementById ("igual");
    var uno=document.getElementById ("1");
    var dos=document.getElementById ("2");
    var tres=document.getElementById ("3");
    var cuatro=document.getElementById ("4");
    var cinco=document.getElementById ("5");
    var seis=document.getElementById ("6");
    var siete=document.getElementById ("7");
    var ocho=document.getElementById ("8");
    var nueve=document.getElementById ("9");
    var cero=document.getElementById ("0");

//eventos

    uno.onclick=function(e){
        resultado.textContent=resultado.textContent+"1";
    }
    dos.onclick=function(e){
        resultado.textContent=resultado.textContent+"2";
    }
    tres.onclick=function(e){
        resultado.textContent=resultado.textContent+"3";
    }
    cuatro.onclick=function(e){
        resultado.textContent=resultado.textContent+"4";
    }
    cinco.onclick=function(e){
        resultado.textContent=resultado.textContent+"5";
    }
    seis.onclick=function(e){
        resultado.textContent=resultado.textContent+"6";
    }
    siete.onclick=function(e){
        resultado.textContent=resultado.textContent+"7";
    }
    ocho.onclick=function(e){
        resultado.textContent=resultado.textContent+"8";
    }
    nueve.onclick=function(e){
        resultado.textContent=resultado.textContent+"9";
    }
    cero.onclick=function(e){
        resultado.textContent=resultado.textContent+"0";
    }

//operaciones

    suma.onclick=function(e){
        numeroa=resultado.textContent;
        operacion="+"; 
        limpiar();
    }
    resta.onclick=function(e){
        numeroa=resultado.textContent;
        operacion="-"; 
        limpiar();
    }
    multiplicacion.onclick=function(e){
        numeroa=resultado.textContent;
        operacion="*"; 
        limpiar();
    }
    division.onclick=function(e){
        numeroa=resultado.textContent;
        operacion="/"; 
        limpiar();
    }
    igual.onclick=function(e){
        numerob=resultado.textContent;
        resolver();
         
    }
    reset.onclick=function(e){
        resetear();
    }

}

//funciones

function limpiar(){
    resultado.textContent="";
}

function resolver(){
    var res=0;
    switch(operacion){
        case "+":
        res=parseFloat(numeroa)+parseFloat(numerob);
        break;
        case "-":
        res=parseFloat(numeroa)-parseFloat(numerob);
        break;
        case "*":
        res=parseFloat(numeroa)*parseFloat(numerob);
        break;
        case "/":
        res=parseFloat(numeroa)/parseFloat(numerob);
        break;
    }
    resetear();
    resultado.textContent=res;
}

function resetear(){
    resultado.textContent="";
    numeroa=0;
    numerob=0;
    operacion="";
}

