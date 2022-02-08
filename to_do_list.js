
let arr=[];
const TextValue=document.getElementById("box");
const submit=document.getElementById("submit");
const clear=document.getElementById("clear");
const ulel=document.getElementById("ul-el");

const ls=JSON.parse(localStorage.getItem("arr"));

if(ls){
    arr=ls;
    display();
}



submit.addEventListener("click",function(){
    arr.push(TextValue.value);

    TextValue.value="";
    localStorage.setItem("arr",JSON.stringify(arr))
    display();
})



clear.addEventListener("click",function(){
    arr=[];
    localStorage.clear(); 

    display();
})



function display(){
    let additems=""
    for(let i=0;i<arr.length;i++){
        additems+=
        `<li>
            ${arr[i]} <button type="button" id="btn-1"  style= padding: 10px 25px;text-align:center; name="delete" onclick="deleteval('${i}')"> Delete</button><br>   
        </li>`
   
    }
    ulel.innerHTML=additems;
}

function deleteval(value){
    for(let i=0;i<arr.length;i++){
        if(i==value){
            arr.splice(i,1);
        }
    }
    localStorage.setItem("arr",JSON.stringify(arr));
    display();

    
}

// const add=submit.addEventListener("click",function({})); 
// console.log("hello");

// function display(){
// let str=[];
// for(let i=0;i < str.length;i++)
// {
//     str=str.push(add[i]);
//     console.log(str);
//     document.getElementById("text").innerHTML=str;
// }
// }