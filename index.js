//document.getElementById("count").innerHTML=5;


let saveEL=document.getElementById("save-el");
let countEL= document.getElementById("count");
let count=0;

function increment(){
 count=count+1;
 document.getElementById("count").innerHTML=count;
 console.log(count);   
}
 function save(){
   // document.getElementById("save").innerHTML=count;
    console.log(count);
    let countstr=count+" - ";
    // document.getElementById("save").innerHTML=count;
    document.getElementById("save-el").innerHTML+=countstr;
    document.getElementById("count").innerHTML=0
 }


