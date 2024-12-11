let img = [
"https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/256742997/movie.293x165.jpg?t=1550167436"
];

function updateAllThumbnails() {
    const thumbnails = document.querySelectorAll("img");

    imgs.forEach(image => {
        image.src = img[1];
    });
}

setInterval(updateAllImages, 500);


