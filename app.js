const smallImg = document.querySelectorAll(".gallery img");
const model =document.querySelector(".model");
const fullImage = document.querySelector(".full-img");

// console.log(smallImg);

smallImg .forEach(function(img){
    img.addEventListener("click" ,function(){
        model.classList.add("open");
        fullImage.classList.add("open");
        // dynamic change 
        const OriginalImage = img.getAttribute("alt");
        fullImage.src = `img/full/${OriginalImage}.jpg`;
    });
});
model.addEventListener("click" ,function(e){
if(e.target.classList.contains("model")){
    model.classList.remove("open");
    fullImage.classList.remove("open");
}
});