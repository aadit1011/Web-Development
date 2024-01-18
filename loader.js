document.addEventListener("DOMContentLoaded", function() {
     setTimeout(function() {
         var preloader = document.getElementById("preloader");
         if (preloader) {
             preloader.style.opacity = "0";
             preloader.style.pointerEvents = "none";
             setTimeout(function() {
                 preloader.parentNode.removeChild(preloader);
             }, 500); 
         }
     }, 1000);
 });

 window.onload = function() {
 };
 