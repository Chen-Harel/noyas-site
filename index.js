document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYearPlaceholder').textContent = currentYear;
});


document.addEventListener("DOMContentLoaded", () => {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            const panel = this.nextElementSibling;
            const isActive = this.classList.contains("active");

            // 1. Close all other open accordion sections
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.classList.remove("active");
                    otherHeader.nextElementSibling.style.maxHeight = null;
                }
            });

            // 2. Toggle the current section
            if (!isActive) {
                this.classList.add("active");
                // We use scrollHeight to tell the browser exactly how much space the text needs
                panel.style.maxHeight = panel.scrollHeight + "px";
            } else {
                this.classList.remove("active");
                panel.style.maxHeight = null;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById('carouselTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // How wide is one slide?
    const getSlideWidth = () => track.offsetWidth;

    nextBtn.addEventListener('click', () => {
        const maxScroll = track.scrollWidth - track.offsetWidth;

        // If we are at the last slide (or very close to it), wrap to start
        if (Math.abs(track.scrollLeft) >= maxScroll - 5) {
            track.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
            // Otherwise, move one slide's width to the left
            track.scrollBy({ left: -getSlideWidth(), behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        // If we are at the first slide, wrap to the end
        if (Math.abs(track.scrollLeft) <= 5) {
            const maxScroll = track.scrollWidth - track.offsetWidth;
            track.scrollTo({ left: -maxScroll, behavior: 'smooth' });
        } else {
            // Otherwise, move one slide's width to the right
            track.scrollBy({ left: getSlideWidth(), behavior: 'smooth' });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.30 // Trigger when 30% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, observerOptions);

    // Target all elements you want to animate
    const sectionsToReveal = document.querySelectorAll(".reveal");
    sectionsToReveal.forEach((el) => observer.observe(el));
});

const scrollBtn = document.getElementById("scrollTopBtn");

// Show the button when the user scrolls down 300px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.classList.add("show-btn");
    } else {
        scrollBtn.classList.remove("show-btn");
    }
};

// When the user clicks the button, scroll to the top smoothly
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});