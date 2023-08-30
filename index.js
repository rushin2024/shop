$(document).ready(function(){
   let fresheners_cat = document.getElementById("fresheners-cat");

   fresheners_cat.addEventListener("click", function(){
      console.log($(".fresheners-cat"));

      $(".fresheners-cat").each(function(index, item){
         $(this).toggle(1000);
      });
   });
});