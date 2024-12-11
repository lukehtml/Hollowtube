let pics = [
"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256742997/movie.293x165.jpg?t=1550167436"
];

function updateAllImages() {
    const imgs = document.querySelectorAll("img");

    imgs.forEach(image => {
        image.src = pics[Math.floor(Math.random() * pics.length)];
    });
}

setInterval(updateAllImages, 500);

