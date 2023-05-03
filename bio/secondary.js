/* const backlight = document.getElementById("backlight");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    backlight.animate({
        left: `${clientX}px`, 
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards"});
    
}
*/

const parallaxImg = document.querySelector(".parallax-img");
const parallaxText = document.querySelector(".bio-description");

document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;
  parallaxImg.style.transform = `translate(-${x * 25}px, -${y * 25}px)`;
  parallaxText.style.transform = `translate(-${x * 25}px, -${y * 25}px)`;
});
