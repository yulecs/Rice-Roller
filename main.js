const img = document.getElementById("myImg");
const btn = document.getElementById("myBtn");

btn.addEventListener("click", () => {
    rand = Math.floor(Math.random() * 6 + 1);
    img.src = "dice" + rand + ".png"
});

