/*

const gifs = document.querySelectorAll('.gif');
gifs.forEach((gif) => {
    gif.addEventListener('mouseenter', () => {
        gif.src = gif.src;
    });
}); */

//Gets all the video elements
const videos = document.querySelectorAll('.grid-item video');

// Event listeners for mouse hover
videos.forEach(video => {
    video.addEventListener('mouseover', () => {
        video.play();
    });

    video.addEventListener('mouseout', () => {
    video.pause();
    });
});

