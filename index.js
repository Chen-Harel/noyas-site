const acc = document.getElementsByClassName("accordion-header");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        // Toggle the "active" class to style the button
        this.classList.toggle("active");

        // Select the next element (the panel)
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            // scrollHeight gives us the height of the content in pixels
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}