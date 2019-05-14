
abrir = function(){
    document.getElementById("quadrado").style.display="block";	
}

fechar = function(){
    document.getElementById("quadrado").style.display="none";		
}		


function Gabinete1(){
  alert( 	
     "Incluso no gabinete: Placa mãe BIOSTAR B360MHD PRO DDR4 LGA 1151 E Fonte GAMEMAX GM500 500W 80 PLUS BRONZE PFC ATIVO - OEM "
  );

}

function Gabinete2(){
    alert("Incluso no gabinete: Placa mãe MSI Z390 MPG GAMING PLUS DDR4 CROSSFIRE LGA 1151 E Fonte GAMEMAX GM800 800W 80 PLUS BRONZE PFC ATIVO");
}

function Gabinete3(){
    alert(
        "Incluso no gabinete: Placa mãe MSI Z390 MAG TOMAHAWK DDR4 CROSSFIRE LGA 1151 E Fonte GAMEMAX GM1050 1050W 80 PLUS SILVER PFC ATIVO"
    );
}

function somar(){

    var result = $("input:checked");
    var total = 0;

    for(var i=0; i<result.length; i++){
        total = total + parseFloat(result[i].value);
    }
    $("#result").val(total.toFixed(2));

}

