function myFunction() {
  var x = document.getElementById("nav-bar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

window.onscroll = function () { myFunction2() };

// var topnav = document.getElementById("topnav");
// var sticky = topnav.offsetTop;

function myFunction2() {
  if (window.pageYOffset >= sticky) {
    topnav.classList.add("sticky")
  } else {
    topnav.classList.remove("sticky");
  }
}



$('button').click(function(){
  $('.popup').addClass('open');
});
 
$('.popup .closebtn').click(function(){
  $('.popup').removeClass('open');
});