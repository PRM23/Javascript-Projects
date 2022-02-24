var NameValue=document.getElementById("name");
var DateValue=document.getElementById("datevalue");
var amount=document.getElementById("amt");
var ulel=document.getElementById("ul-el");
var add_expense=document.getElementById("add-btn");
var Action=document.getElementById("action");
let arr=[];
//add_expense.addEventListener("click");





add_expense.addEventListener("click",showData);


var row=1;
function showData(){
// arr.push({
//  name:NameValue.value,
// datevalue:DateValue.value,
// amt:amount.value,
// action:Action.value
// });

var name=NameValue.value;
var datevalue=DateValue.value;
var amt=amount.value;
var action=Action.value;

// var name=localStorage.setItem("name", nm);
// var date = localStorage.setItem("date", dt);
// var amount=localStorage.setItem("at", at);


//var display=document.getElementById("display");

var newRow=display.insertRow(row);

var cell1=newRow.insertCell(0);
var cell2=newRow.insertCell(1);
var cell3=newRow.insertCell(2);
var cell4=newRow.insertCell(3);


cell1.innerHTML=name;
cell2.innerHTML=datevalue;
cell3.innerHTML=amt;
cell4.innerHTML=`<button type="button" name="delete" onclick="delval()"> Delete</button>  `;

row++;


}


// function show(){
//     let additems = "";
//   for (let i = 0; i < arr.length; i++) {
//     additems += `
//             ${arr[i]}  <button type="button" name="delete" onclick="delval()"> Delete</button>   
//         `;
//   }
//   ulel.innerHTML = additems;




function delval(){
   
    var Table= document.getElementById("display");
    var x= Table.rows.length;
    while(--x){
      Table.deleteRow(x,1);
    }

    if(name = arr.name){
        arr.pop()
    }
    showData();

//document.getElementById("row1").remove();
      
       
            // for (let i = 0; i < arr.length; i++) {
            //   if (i == val) {
            //     arr.splice(i, 1);
            //   }
            // }
            // show();
          
}


//ulel.innerHTML=showData();

