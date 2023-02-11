function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    // Take the picture tag
    const img = document.querySelector("#profile img");

    if (html.classList.contains('light')) {
        img.setAttribute("src", "./assets/avatar/avatar-light.png");
    } else {
        img.setAttribute("src", "./assets/avatar/avatar.png");
    }
}