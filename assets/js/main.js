
const cursor = document.querySelector("#cursor");

let mouse = { x: -100, y: -100 };
let pos = { x: 0, y: 0 };
const speed = 0.1;

function updateCoordinates(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
}

window.addEventListener("mousemove", updateCoordinates);

const updatePosition = () => {
    pos.x += (mouse.x - pos.x) * speed;
    pos.y += (mouse.y - pos.y) * speed;

    cursor.style.transform = "translate3d(" + pos.x + "px, " + pos.y + "px, 0)";
}

function loop() {
    updatePosition();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);

const cursorModifiers = document.querySelectorAll("[cursor-class]");

cursorModifiers.forEach((cursorModifier) => {
    cursorModifier.addEventListener("mouseenter", function () {
        const attribute = this.getAttribute("cursor-class");
        cursor.classList.add(attribute);
    });

    cursorModifier.addEventListener("mouseleave", function () {
        const attribute = this.getAttribute("cursor-class");
        cursor.classList.remove(attribute);
    });
});



