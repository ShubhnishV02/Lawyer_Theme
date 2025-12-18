// Navbar Sticky and Normal Depends on scrolling -----------------------------------------

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-complete-body");
    const navBTN = document.getElementById("nav-btn");

    if (window.scrollY > 50) {
        navbar.classList.add('nav-sticky');
        navBTN.style.color = "var(--text-white)";


        // on hover and leave, color and background changes
        navBTN.addEventListener("mouseover", function () {
            navBTN.style.color = "var(--text-white)";
        })
        navBTN.addEventListener("mouseleave", function () {
            navBTN.style.color = "var(--secondary-color)";
        })

    } else {
        navbar.classList.remove('nav-sticky');
        navBTN.style.color = "var(--text-white)";

        // on hover and leave, color and background changes
        navBTN.addEventListener("mouseover", function () {
            navBTN.style.color = "var(--text-white)";
        })
        navBTN.addEventListener("mouseleave", function () {
            navBTN.style.color = "var(--text-white)";
        })
    }
});

// Navbar Sticky and Normal Depends on scrolling closed-----------------------------------------




window.addEventListener("scroll", function () {
    const topArrowbutton = document.querySelector(".top-scroll-full");

    if (window.scrollY > 450) {
        topArrowbutton.style.opacity = "1";
        topArrowbutton.style.transition = "opacity 0.3s ease";
    }else{
        topArrowbutton.style.opacity = "0";
    }
});





// Navbar Menu Open-close complete functionality with overlay and body no-scroll and with colors resetting 
// based on screen sizes starts in this block...--------------------------------------------------------------------------
const menuButton = document.getElementById("menu-btn");
const menuLinks = document.querySelector('.navbar_links ul');
const navLinks = document.querySelectorAll('.nav-itemss');
const body = document.body;
const overlay = document.querySelector('.menu-overlay');

function toggleMenu() {
    if (window.innerWidth <= 981) {
        menuButton.classList.toggle("active");
        menuLinks.classList.toggle("open");
        overlay.classList.toggle("active");

        // Toggle no-scroll class on the body
        if (menuLinks.classList.contains("open")) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    }
}

function closeMenu() {
    if (window.innerWidth <= 981) {
        menuButton.classList.remove("active");
        menuLinks.classList.remove("open");
        overlay.classList.remove("active");
        body.classList.remove("no-scroll");
    }
}

menuButton.addEventListener("click", toggleMenu);

// Close menu when any link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", closeMenu);
});

overlay.addEventListener("click", closeMenu);

// Reset classes for larger screens when resizing the browser screens
// Also added navbar menu items colors based on screens sizes the menu items colors defined like 
// "small screens we need dark color not based on scroll."
// but "in big screens we need white color items when background transparent on scroll is less than 50 and above 50 scroll we need dark on white bg"
window.addEventListener("resize", () => {
    if (window.innerWidth > 981) {
        menuButton.classList.remove("active");
        menuLinks.classList.remove("open");
        overlay.classList.remove("active");
        body.classList.remove("no-scroll");

    }
});
// based on screen sizes ends in this block...-------------------------------------------------------------------------------------------------





// Sidebar Socialmedia icons open close functionality starts here ---------------------------------------------------------
const boxOpenClose = document.getElementById("socialmediaSidebar");
const arrowRight = document.querySelector(".sidebar-arrow-right");
const arrowLeft = document.querySelector(".sidebar-arrow-left");

boxOpenClose.addEventListener("click", function () {
    if (boxOpenClose.style.left === "-48px" || boxOpenClose.style.left === "") {
        boxOpenClose.style.left = "0";
        arrowRight.style.display = "none";
        arrowLeft.style.display = "block";
    } else {
        boxOpenClose.style.left = "-48px";
        arrowRight.style.display = "block";
        arrowLeft.style.display = "none";
    }
})
// Sidebar Socialmedia icons open close functionality ends here ----------------------------------------------------------






