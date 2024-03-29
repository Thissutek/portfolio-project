
// Old Code for the Backlight wasn't working for new sections of the page
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

//Backlight Cards Function

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



//Loading Screen Function

  window.addEventListener('load', () => {
    const loader = document.querySelector('#loader');
    loader.style.display = 'none';
  })

  //Set the duration of the loader in millieseconds
  const loaderDuration = 0;

  //Select the loader and website content elements
  const loader = document.querySelector('#loader')
  const content = document.querySelector('.content');

  //Delay the removal of the loader
  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
  }, loaderDuration);



//Scroll event handler function
function animateSection() {
  const sections = document.querySelectorAll('.skill-section');
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight / 2 ) {
      section.classList.add('animated')
    }
  });
};

window.addEventListener('scroll', animateSection);

// Scroll to Top Button function
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", function () {
  //shows the button when the user scrolls far enough down
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

scrollToTopBtn.addEventListener("click", function() {
//smooth scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// #nav-bar stick to the top on scroll
const navBar = document.querySelector('nav');
const navBarTop = navBar.offsetTop;

function handleScroll() {
  if (window.pageYOffset >= navBarTop) {
    navBar.classList.add('fixed');
  } else {
    navBar.classList.remove('fixed');
  }
}

window.addEventListener('scroll', handleScroll);