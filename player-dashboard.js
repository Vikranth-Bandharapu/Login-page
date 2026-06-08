// Page Loaded Animation

document.addEventListener("DOMContentLoaded", () => {

    const cards = document.querySelectorAll(
        ".stat-card,.game-card,.tournament-card,.member-card,.achievement"
    );

    cards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = "all .6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }, index * 100);

    });

});

// Sidebar Active Effect

const menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");

    });

});

// Stat Counter Animation

const counters = document.querySelectorAll(".stat-card h2");

counters.forEach(counter => {

    const targetText = counter.innerText;

    const target = parseInt(
        targetText.replace(/[^0-9]/g, "")
    );

    if (!isNaN(target)) {

        let count = 0;

        const updateCounter = () => {

            const increment = target / 60;

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(
                    updateCounter
                );

            } else {

                counter.innerText =
                    targetText;

            }

        };

        updateCounter();

    }

});

// Notification Click

const notifications =
document.querySelectorAll(".action");

notifications.forEach(btn => {

    btn.addEventListener("click", () => {

        btn.style.transform =
            "scale(1.2)";

        setTimeout(() => {

            btn.style.transform =
                "scale(1)";

        }, 200);

    });

});

// Hero Button

const playBtn =
document.querySelector(".hero button");

if (playBtn) {

    playBtn.addEventListener("click", () => {

        alert(
            "Welcome to Stackly Gaming Arena 🚀"
        );

    });

}

// Game Card Hover Effect

const gameCards =
document.querySelectorAll(".game-card");

gameCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "translateY(0) scale(1)";

    });

});

// Achievement Glow Effect

const achievements =
document.querySelectorAll(".achievement");

achievements.forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.boxShadow =
            "0 0 25px rgba(37,99,235,.5)";

    });

    item.addEventListener("mouseleave", () => {

        item.style.boxShadow =
            "none";

    });

});

// Auto Rotate Notification Badge

setInterval(() => {

    const badges =
    document.querySelectorAll(".action span");

    badges.forEach(badge => {

        badge.style.transform =
            "scale(1.3)";

        setTimeout(() => {

            badge.style.transform =
                "scale(1)";

        }, 300);

    });

}, 3000);

// Smooth Scroll

document.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if(target){

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});

console.log(
    "🚀 Stackly Player Dashboard Loaded Successfully"
);

document.querySelectorAll(".fill").forEach(bar=>{

const width = bar.style.width;

bar.style.width = "0";

setTimeout(()=>{

bar.style.transition="2s";
bar.style.width=width;

},500);

});
const liveDot =
document.querySelector(".live-dot");

if(liveDot){

setInterval(()=>{

liveDot.style.opacity="0.4";

setTimeout(()=>{

liveDot.style.opacity="1";

},500);

},1000);

}