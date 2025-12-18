// Gallery Section for pagination and filters the images on click js------------------------

document.addEventListener("DOMContentLoaded", function () {
    const galleryImages = document.querySelectorAll(".gallery-images");
    const paginationControls = document.getElementById("pagination-controls");
    const itemsPerPage = 12;
    let currentPage = 1;
    let currentFilter = "all";

    function renderGallery() {
        // Filter images based on the current filter
        const filteredImages = Array.from(galleryImages).filter((image) =>
            currentFilter === "all" || image.dataset.category === currentFilter
        );

        // Hide all images
        galleryImages.forEach(image => image.classList.add("hidden"));

        // Calculate the start and end indices for the current page
        const startIdx = (currentPage - 1) * itemsPerPage;
        const endIdx = startIdx + itemsPerPage;

        // Show images for the current page
        filteredImages.slice(startIdx, endIdx).forEach((image) => {
            image.classList.remove("hidden");
        });

        // Render pagination controls
        renderPagination(filteredImages.length);

        // Initialize Fancybox for visible images
        // Only bind Fancybox for visible gallery images
        Fancybox.bind(".gallery-images:not(.hidden) a", {
            closeButton: "inside",
            Thumbs: false,
            dragToClose: false,
            animated: true,
            animationEffect: "zoom-in-out",
        });
    }

    function renderPagination(totalItems) {
        const totalPages = Math.ceil(totalItems / itemsPerPage);
        paginationControls.innerHTML = "";

        // Show pagination controls only if more than one page is needed
        if (totalPages > 1) {
            for (let i = 1; i <= totalPages; i++) {
                const button = document.createElement("button");
                button.classList.add("pagination-btn");
                button.textContent = i;
                button.dataset.page = i;
                if (i === currentPage) {
                    button.classList.add("active");
                }
                button.addEventListener("click", function () {
                    currentPage = parseInt(this.dataset.page);
                    renderGallery();
                });
                paginationControls.appendChild(button);
            }
        }
    }


    function handleFilterClick(event) {
        const clickedButton = event.target;
        if (!clickedButton.classList.contains("gallery-btn")) return;

        // Update active button styling
        document.querySelectorAll(".gallery-btn").forEach((btn) =>
            btn.classList.remove("current-btn-selected")
        );
        clickedButton.classList.add("current-btn-selected");

        // Update filter and reset to page 1
        currentFilter = clickedButton.dataset.filter;
        currentPage = 1;

        renderGallery();
    }


    function initializeProductFancybox() {
        // Bind Fancybox for product popups
        Fancybox.bind('[data-fancybox]', {
            closeButton: "inside",
            Thumbs: false,
            dragToClose: false,
            animated: true,
            animationEffect: "zoom-in-out",
        });

        document.querySelectorAll(".redrct-btn-to-normal-page").forEach(function (button) {
            button.addEventListener("click", function () {
                Fancybox.close();
            });
        });
    }


    initializeProductFancybox();
    renderGallery();

    // Attach event listener to filter buttons
    document
        .querySelector(".gallery-select-buttons")
        .addEventListener("click", handleFilterClick);

});

// Gallery Section for pagination and filters the images on click js ends --------------------------------

