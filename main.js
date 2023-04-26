/*document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    }
}

const backlight = document.getElementById("backlight");

document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    backlight.style.left = `${clientX}px`;
    backlight.style.top = `${clientY}px`;
}
*/

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
  
  const backlight = document.getElementById("backlight");
  
  document.body.addEventListener("pointermove", event => {
    backlight.style.left = `${event.clientX}px`;
    backlight.style.top = `${event.clientY}px`;
  });
