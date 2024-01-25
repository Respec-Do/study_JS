function change(object) {
    object.src =
        "images/" +
        (object.src.includes("male.png") ? "pikachu.png" : "male.png");
}
