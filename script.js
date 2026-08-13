function showMessage() {
    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });
}

function showCarDetails(car) {

    const modal = document.getElementById("carModal");

    const image = document.getElementById("modalImage");
    const title = document.getElementById("modalTitle");
    const type = document.getElementById("modalType");
    const description = document.getElementById("modalDescription");
    const engine = document.getElementById("modalEngine");
    const power = document.getElementById("modalPower");
    const price = document.getElementById("modalPrice");


    if (car === "BMW M4") {

        image.src = "images/bmw.jpg";

        title.textContent = "BMW M4";
        type.textContent = "M Performance";

        description.textContent =
            "A powerful performance coupe combining everyday comfort with serious driving performance.";

        engine.textContent = "3.0L Twin-Turbo I6";
        power.textContent = "503 HP";
        price.textContent = "$90,000";
    }


    else if (car === "Porsche 911 GT3 RS") {

        image.src = "images/porsche.jpg";

        title.textContent = "Porsche 911 GT3 RS";
        type.textContent = "Track Performance";

        description.textContent =
            "A track-focused sports car built for extreme performance and precise handling.";

        engine.textContent = "4.0L Naturally Aspirated Flat-6";
        power.textContent = "518 HP";
        price.textContent = "$210,000";
    }


    else if (car === "Mercedes-Benz CLS 63 AMG") {

        image.src = "images/cls63.jpg";

        title.textContent = "Mercedes-Benz CLS 63 AMG";
        type.textContent = "AMG Performance";

        description.textContent =
            "A luxurious high-performance sedan combining elegant design with powerful AMG performance.";

        engine.textContent = "5.5L Twin-Turbo V8";
        power.textContent = "577 HP";
        price.textContent = "$35,000";
    }


    modal.style.display = "flex";
}


function closeCarDetails() {

    document.getElementById("carModal").style.display = "none";

}

document.getElementById("carModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeCarDetails();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeCarDetails();
    }

});