window.onscroll=function showHeader(){
var header = document.querySelector('.headerbottom');
if(window.pageYOffset >40){
    header.classList.add('fixed');
}
else{
    header.classList.remove('fixed');
}
}
function isValidEmail() {
     var author = document.getElementsByName("author")[0].value;
     var daytnum = document.getElementsByName("daytnum")[0].value;
     var mail = document.getElementsByName("mail")[0].value;
     var pass = document.getElementsByName("pass")[0].value;
 
      if (isNaN(author) == false) alert("You entered incorrect name");
      else if (isNaN(daytnum) == true || daytnum.length < 10 || daytnum.indexOf("+") == -1) alert("You entered incorrect number");
      else if (mail.indexOf("@") == -1  || mail.indexOf(".") == -1) alert("You entered incorrect email");
      else if (pass.length<6 ) alert("You entered incorrect password");
      else alert("Message is sent");
}


document.onkeyup = function (e) {
  e.preventDefault();
  if (e.keyCode === 13) {
    // код ентера
    clearControls();
    alert("Message is sent");
  }
  return false;
};
