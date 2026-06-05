//
// ANIMATED COUNTERS
//

function animateCounter(id, end, prefix = "") {

let element =
document.getElementById(id);

let start = 0;

let duration = 2000;

let increment = end / (duration / 20);

let timer = setInterval(() => {

start += increment;

if(start >= end){

start = end;

clearInterval(timer);

}

element.innerText =
prefix + Math.floor(start).toLocaleString();

},20);

}

animateCounter("players",12540);
animateCounter("teams",1245);
animateCounter("tournaments",48);
animateCounter("revenue",450000,"₹");


//
// ANALYTICS CHART
//

const ctx =
document.getElementById("analyticsChart");

new Chart(ctx,{

type:"line",

data:{

labels:[
"Jan",
"Feb",
"Mar",
"Apr",
"May",
"Jun",
"Jul"
],

datasets:[{

label:"Players",

data:[
1200,
1800,
2600,
3200,
4500,
6800,
9200
],

borderColor:"#7C5CFF",

backgroundColor:"rgba(124,92,255,.15)",

fill:true,

tension:.4

},

{

label:"Revenue",

data:[
50000,
90000,
120000,
170000,
220000,
310000,
450000
],

borderColor:"#3B82F6",

backgroundColor:"rgba(59,130,246,.15)",

fill:true,

tension:.4

}]

},

options:{

responsive:true,

maintainAspectRatio:false,

plugins:{

legend:{
labels:{
color:"#fff"
}
}

},

scales:{

x:{
ticks:{
color:"#fff"
},
grid:{
color:"rgba(255,255,255,.05)"
}
},

y:{
ticks:{
color:"#fff"
},
grid:{
color:"rgba(255,255,255,.05)"
}
}

}

}

});


//
// NOTIFICATION ICONS
//

document.querySelectorAll(".icon")
.forEach(icon=>{

icon.addEventListener("click",()=>{

alert("Notifications Module Coming Soon 🔔");

});

});


//
// QUICK ACTIONS
//

document.querySelectorAll(".action-card")
.forEach(card=>{

card.addEventListener("click",()=>{

let title =
card.querySelector("h4").innerText;

alert(title + " Clicked 🚀");

});

});


//
// USER MANAGEMENT BUTTONS
//

document.querySelectorAll(".view-btn")
.forEach(btn=>{

btn.addEventListener("click",()=>{

alert("User Profile Opening...");

});

});


//
// AUTO ACTIVITY FEED
//

const activities = [

"🔥 New Team Registered",
"🏆 Tournament Created",
"👤 New Manager Added",
"⚔ Match Started",
"💰 Revenue Updated",
"📩 New Support Ticket",
"🎮 Player Approved",
"📢 Announcement Published"

];

const activityList =
document.querySelector(".activity-list");

setInterval(()=>{

let item =
document.createElement("div");

item.className =
"activity-item";

item.innerText =
activities[Math.floor(Math.random()*activities.length)];

activityList.prepend(item);

if(activityList.children.length > 6){

activityList.removeChild(
activityList.lastElementChild
);

}

},5000);


//
// SIDEBAR ACTIVE STATE
//

document.querySelectorAll(".sidebar li")
.forEach(item=>{

item.addEventListener("click",()=>{

document
.querySelectorAll(".sidebar li")
.forEach(li=>li.classList.remove("active"));

item.classList.add("active");

});

});


//
// PROFILE DROPDOWN (Simple Version)
//

const profile =
document.querySelector(".profile");

profile.addEventListener("click",()=>{

alert(
"Admin Profile\n\nSettings\nLogout"
);

});