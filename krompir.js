var erej=[];
function funkcija(){
    var a=document.getElementById("brojevi").value;
    erej=a.split(" ",10);
    if(isNaN(Math.max.apply(Math, erej))){
        document.getElementById("tagcina").innerHTML="nije dobro";
    }
    else{
        document.getElementById("tagcina").innerHTML=Math.max.apply(Math, erej);
    }
}
function provjera(){
    var imencic=document.getElementById("ime").value;
    var godine=document.getElementById("godine").value;
    if (imencic.length > 10){
        document.getElementById("tagcic").innerHTML="ime je dobro";
    }
    else{
        document.getElementById("tagcic").innerHTML="ime nije dobro";

    }
    if(godine>18 && godine<99){
        document.getElementById("godine1").innerHTML="godine su dobre"+", "+godine;

    }
    else{
        document.getElementById("godine1").innerHTML="godine nisu dobre"+", "+godine;

    }

}
function rendom() {
    var broj = Math.floor((Math.random() * 1000) + 1);
    if (broj > 1 && broj < 200) {
        document.getElementById("bojaa").style.backgroundColor = "blue";
    }
    if (broj > 201 && broj < 401) {
        document.getElementById("bojaa").style.backgroundColor = "red";
    }
    if (broj > 601 && broj < 801) {
        document.getElementById("bojaa").style.backgroundColor = "green";
    }
    if (broj > 801 && broj < 1000) {
        document.getElementById("bojaa").style.backgroundColor = "yellow";
    }
}