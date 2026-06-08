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

function showSection(id){

document.getElementById("games").style.display="none";
document.getElementById("tournaments").style.display="none";
document.getElementById("team").style.display="none";
document.getElementById("settings").style.display="none";

if(document.getElementById(id)){
document.getElementById(id).style.display="block";
}

}
function showSection(sectionId){

document.querySelectorAll(".page-section")
.forEach(section=>{
section.classList.remove("active");
});

document.querySelectorAll(".sidebar a")
.forEach(link=>{
link.classList.remove("active");
});

document.getElementById(sectionId)
.classList.add("active");

event.currentTarget.classList.add("active");
}