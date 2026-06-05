// SEARCH FILTER

const searchInput =
document.querySelector(".search-box input");

const cards =
document.querySelectorAll(".team-card");

searchInput.addEventListener("keyup", () => {

let value =
searchInput.value.toLowerCase();

cards.forEach(card => {

let team =
card.querySelector("h2")
.innerText.toLowerCase();

if(team.includes(value)){
card.style.display = "block";
}
else{
card.style.display = "none";
}

});

});

// HEART BUTTON

document.querySelectorAll(".card-image i")
.forEach(icon=>{

icon.addEventListener("click",()=>{

icon.classList.toggle("fa-solid");
icon.classList.toggle("fa-regular");

});

});

// NOTIFICATION CLICK

document.querySelectorAll(".icon")
.forEach(icon=>{

icon.addEventListener("click",()=>{

alert("Feature Coming Soon 🚀");

});

});

// ADD TEAM BUTTON

document.querySelector(".add-team")
.addEventListener("click",()=>{

alert("Add Team Module Coming Soon");

});

// ACTIVITY AUTO UPDATE

const activityPanel =
document.querySelector(".activity-panel");

const messages = [

"🎮 New Team Registered",
"🏆 Tournament Registration Open",
"🔥 Phoenix Squad Reached Finals",
"⚔ Match Starting in 30 Minutes",
"📩 New Team Approval Request"

];

setInterval(()=>{

let div =
document.createElement("div");

div.className = "activity";

div.innerHTML =
`<p>${messages[Math.floor(Math.random()*messages.length)]}</p>`;

activityPanel.appendChild(div);

if(activityPanel.children.length > 8){

activityPanel.removeChild(
activityPanel.children[1]
);

}

},10000);