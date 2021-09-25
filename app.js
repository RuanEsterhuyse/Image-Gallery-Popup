const fullImg = document.querySelector(".full-img");
const smallImg = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".modal");

smallImg.forEach(function(img){
    img.addEventListener("click", function(){
        modal.classList.add("open");
    });
});