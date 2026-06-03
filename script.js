const model = document.querySelector(".placeholder-model");

let angle = 0;

function animate() {
    angle += 0.3;

    model.style.transform =
        `rotate(${Math.sin(angle * 0.02) * 3}deg)`;

    requestAnimationFrame(animate);
}

animate();