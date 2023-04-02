const backlight = document.getElementById("backlight");

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    backlight.animate({
        left: `${clientX}px`, 
        top: `${clientY}px`
    }, { duration: 3000, fill: "forwards"});
    
}

