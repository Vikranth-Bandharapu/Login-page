// Animated Counter

const counters =
document.querySelectorAll(".card h2");

counters.forEach(counter => {

    const text =
    counter.innerText;

    const isMoney =
    text.includes("$");

    const target =
    parseInt(
    text.replace(/[^0-9]/g,'')
    );

    let count = 0;

    const speed =
    target / 80;

    const update = () => {

        count += speed;

        if(count < target){

            if(isMoney){

                counter.innerText =
                "$" +
                Math.floor(count) +
                "K";

            }else{

                counter.innerText =
                Math.floor(count);

            }

            requestAnimationFrame(update);

        }else{

            counter.innerText =
            text;
        }
    };

    update();

});


// Card Reveal Animation

const cards =
document.querySelectorAll(
'.card,.player,.match-card'
);

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=
"translateY(0)";

}

});

},

{
threshold:.2
}

);

cards.forEach(card=>{

card.style.opacity="0";

card.style.transform=
"translateY(40px)";

card.style.transition=
".8s ease";

observer.observe(card);

});


// Active Sidebar Animation

const menuItems =
document.querySelectorAll(
".sidebar ul li"
);

menuItems.forEach(item=>{

item.addEventListener(
"click",
()=>{

menuItems.forEach(i=>
i.classList.remove(
"active"
)
);

item.classList.add(
"active"
);

});

});


// Floating Featured Card

const featured =
document.querySelector(
".featured-card"
);

let position = 0;

setInterval(()=>{

position =
position === 0 ? 8 : 0;

featured.style.transform =
`translateY(${position}px)`;

featured.style.transition =
"2s ease";

},2000);


// Notification Bell Animation

const bell =
document.querySelector(
".fa-bell"
);

setInterval(()=>{

bell.style.transform =
"rotate(20deg)";

setTimeout(()=>{

bell.style.transform =
"rotate(-20deg)";

},150);

setTimeout(()=>{

bell.style.transform =
"rotate(0deg)";

},300);

},5000);


// Welcome Message

window.addEventListener(
"load",
()=>{

setTimeout(()=>{

console.log(
"Welcome to Esports Dashboard"
);

},500);

});