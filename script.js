const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(
    function(image) {
        image.addEventListener(
            "mouseover", function() {
                image.style.transform = "scale(1.05)";
            }
        );

        image.addEventListener(
            "mouseout", function() {
                image.style.transform = "scale(1)";
            }
        );
    }
);


const btn = document.getElementById("btn");

if (btn) {
    btn.addEventListener(
        "mouseover", function() {
            btn.style.transform = "scale(1.05)";
        }
    );

    btn.addEventListener(
        "mouseout", function() {
            btn.style.transform = "scale(1)";
        }
    );
}


const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
    const siteHeader = navToggle.closest("header");

    navToggle.addEventListener(
        "click", function() {
            const isOpen = siteHeader.classList.toggle("nav-open");
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        }
    );

    siteHeader.querySelectorAll(".links a").forEach(
        function(link) {
            link.addEventListener(
                "click", function() {
                    siteHeader.classList.remove("nav-open");
                    navToggle.setAttribute("aria-expanded", "false");
                }
            );
        }
    );
}
