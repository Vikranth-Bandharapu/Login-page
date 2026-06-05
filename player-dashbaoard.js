console.log("Player dashboard loaded");
document.addEventListener("DOMContentLoaded", () => {

const cards = document.querySelectorAll(
".card,.tcard,.stat"
);

cards.forEach((card,index)=>{

card.style.opacity="0";

card.style.transform=
"translateY(30px)";

setTimeout(()=>{

card.style.transition=
"all 0.6s ease";

card.style.opacity="1";

card.style.transform=
"translateY(0)";

},index*150);

});

});