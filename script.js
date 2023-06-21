var ham = document.querySelector(".ham");
var open = document.querySelector(".chill");
var close = document.querySelector(".unsh");
open.addEventListener("click", function(e){

    ham.style.visibility="visible";

});
close.addEventListener("click", function(e){

    ham.style.visibility="hidden";

});