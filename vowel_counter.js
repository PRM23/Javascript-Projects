let Vowel = document.getElementById("vowel");

var Check = document.getElementById("check");

Check.addEventListener("click", display);

function display() {
  var count = 0;
  let str = Vowel.value;
  //var str = v.toString();
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u" ||
      str.charAt(i) == "A" ||
      str.charAt(i) == "E" ||
      str.charAt(i) == "I" ||
      str.charAt(i) == "O" ||
      str.charAt(i) == "U"
    ) {
      //console.log("HI");
      count = count + 1;
    }
  }
  //return count;
  alert("There are " + count + " vowels");
  Vowel.value = "";
}
