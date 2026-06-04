const model = document.querySelector(".placeholder-model");

let angle = 0;

function animate() {
    angle += 0.3;

    model.style.transform =
        `rotate(${Math.sin(angle * 0.02) * 3}deg)`;

    requestAnimationFrame(animate);
}

animate();


// QUESTION FADE-IN

const questionSection =
    document.querySelector(".question-section");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.2
});

observer.observe(questionSection);