// dropdown complete js functionality for multilevel dropdown when click opened and again clicked closed the dropdown menu....

document.addEventListener("DOMContentLoaded", function () {
    // Toggle first-level dropdown
    document.querySelectorAll(".dropdown > .dropdown-toggle").forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function () {
            const menu = this.nextElementSibling;

            // Close all other first-level dropdowns
            document.querySelectorAll(".dropdown > .dropdown-toggle + .sub-twice-class.show").forEach(function (otherMenu) {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove("show");
                }
            });

            menu.classList.toggle("show");
        });
    });

    // Toggle second-level (twice) dropdown
    document.querySelectorAll(".sub-twice-class > .dropdown-toggle").forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            const menu = this.nextElementSibling;

            // Close all other second-level dropdowns inside the same parent
            const parent = this.closest(".dropdown-menu");
            parent.querySelectorAll(".sub-dropdown-twice.show").forEach(function (otherMenu) {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove("show");
                }
            });

            menu.classList.toggle("show");
        });
    });

    // Toggle third-level (thrice) dropdown
    document.querySelectorAll(".sub-thrice-class > .dropdown-toggle").forEach(function (dropdownToggle) {
        dropdownToggle.addEventListener("click", function (e) {
            e.stopPropagation();
            const menu = this.nextElementSibling;

            // Close all other third-level dropdowns inside the same sub-dropdown-twice
            const parent = this.closest(".sub-dropdown-twice");
            parent.querySelectorAll(".sub-dropdown-thrice.show").forEach(function (otherMenu) {
                if (otherMenu !== menu) {
                    otherMenu.classList.remove("show");
                }
            });

            menu.classList.toggle("show");
        });
    });
});