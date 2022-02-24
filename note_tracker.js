let arr = [];
const Note = document.getElementById("note");

const add_expense = document.getElementById("add");
const ulel = document.getElementById("ul-el");

var modal = document.getElementById("myModal");

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

function callmodel(val) {
  document.getElementById("info").innerText = val;
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const ls = JSON.parse(localStorage.getItem("arr"));

if (ls) {
  arr = ls;
  display();
}

add_expense.addEventListener("click", function () {
  arr.push({
    note: Note.value,
  });

  localStorage.setItem("arr", JSON.stringify(arr));
  display();
});

function display() {
  let additems = "";
  for (let i = 0; i < arr.length; i++) {
    additems += `<div class="box ">
              <p>Note ${i + 1}</p>
            ${arr[i].note.slice(0, 50)}....<br><br>
            <button onclick="callmodel('${arr[i].note}')">View Details</button> 
    </div>`;
  }

  ulel.innerHTML = additems;
}

// for (let i = 0; i < arr.length; i++) {
//   if (i == value) {
//     arr.splice(i, 1);
//   }
// }

localStorage.setItem("arr", JSON.stringify(arr));
display();
