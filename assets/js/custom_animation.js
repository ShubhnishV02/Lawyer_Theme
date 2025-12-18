document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'slidInFromRight' class
    const textElements = document.querySelectorAll('.slidInFromRight');

    // Create an IntersectionObserver to observe when the elements are in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation when the element is in view
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target); // Stop observing after the animation runs
            }
        });
    }, {
        threshold: 0.3 // Trigger when 20% of the element is visible in the viewport
    });

    // Start observing each element with the 'slidInFromRight' class
    textElements.forEach(element => {
        observer.observe(element);
    });
}); 




// Slide in from left for same effect like right to left
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.slidInFromLefttoright');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    textElements.forEach(element => {
        observer.observe(element);
    });
});





// Slide in from top to bottom observer animation
document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll('.slidInFromTop');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    // Start observing each element with the 'slidInFromTop' class
    textElements.forEach(element => {
        observer.observe(element);
    });
});

// Slide in from top to bottom observer animation ends----


// Slide in from bottom to top observer animation
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'slidInFromBottom' class
    const textElements = document.querySelectorAll('.slidInFromBottom');

    // Create an IntersectionObserver to observe when the elements are in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation when the element is in view
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target); // Stop observing after the animation runs
            }
        });
    }, {
        threshold: 0.3
    });

    // Start observing each element with the 'slidInFromBottom' class
    textElements.forEach(element => {
        observer.observe(element);
    });
});


// Slide in from bottom to top observer animation ends----





// Slide in from bottom to top observer animation with 0.1 threshold
document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the 'slidInFromBottom' class
    const textElements = document.querySelectorAll('.slidFromBtm0point1');

    // Create an IntersectionObserver to observe when the elements are in view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the animation when the element is in view
                entry.target.classList.add('animate-slide-in');
                observer.unobserve(entry.target); // Stop observing after the animation runs
            }
        });
    }, {
        threshold: 0.2
    });

    // Start observing each element with the 'slidInFromBottom' class
    textElements.forEach(element => {
        observer.observe(element);
    });
});

// Slide in from bottom to top observer animation ends----