const model = document.querySelector(".placeholder-model");

let angle = 0;

function animate() {
    angle += 0.3;

    model.style.transform =
        `rotate(${Math.sin(angle * 0.02) * 3}deg)`;

    requestAnimationFrame(animate);

    const question = document.querySelector(".question-section h2");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting) {
            question.classList.add("visible");
        }

    });

});

observer.observe(question);
}


animate();