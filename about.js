

const body = document.body;

const rtlToggle = document.getElementById("rtlToggle");

const themeToggle = document.getElementById("themeToggle");

const themeIcon = document.getElementById("themeIcon");

const menuToggle = document.getElementById("menuToggle");

const menuIcon = document.getElementById("menuIcon");

const navMenu = document.getElementById("navMenu");

const navDropdown = document.querySelector(".nav-dropdown");

const dropdownToggle =
    document.querySelector(".nav-dropdown-toggle");





const savedTheme =
    localStorage.getItem("greengrow-theme");


if (savedTheme === "dark") {

    body.setAttribute("data-theme", "dark");

    themeIcon.className =
        "bi bi-sun-fill";

} else {

    body.removeAttribute("data-theme");

    themeIcon.className =
        "bi bi-moon-stars-fill";
}


themeToggle.addEventListener("click", function () {

    const darkMode =
        body.getAttribute("data-theme") === "dark";


    if (darkMode) {

        body.removeAttribute("data-theme");

        localStorage.setItem(
            "greengrow-theme",
            "light"
        );

        themeIcon.className =
            "bi bi-moon-stars-fill";

    } else {

        body.setAttribute(
            "data-theme",
            "dark"
        );

        localStorage.setItem(
            "greengrow-theme",
            "dark"
        );

        themeIcon.className =
            "bi bi-sun-fill";
    }

});



rtlToggle.addEventListener("click", function () {

    const currentDirection =
        document.documentElement.getAttribute("dir");


    if (currentDirection === "rtl") {

        document.documentElement.setAttribute(
            "dir",
            "ltr"
        );

        localStorage.setItem(
            "greengrow-direction",
            "ltr"
        );

    } else {

        document.documentElement.setAttribute(
            "dir",
            "rtl"
        );

        localStorage.setItem(
            "greengrow-direction",
            "rtl"
        );
    }

});



const savedDirection =
    localStorage.getItem("greengrow-direction");


if (savedDirection) {

    document.documentElement.setAttribute(
        "dir",
        savedDirection
    );

}


menuToggle.addEventListener("click", function () {

    const isOpen =
        navMenu.classList.toggle("active");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    if (isOpen) {

        menuIcon.className =
            "bi bi-x-lg";

        menuToggle.setAttribute(
            "aria-label",
            "Close menu"
        );

    } else {

        menuIcon.className =
            "bi bi-list";

        menuToggle.setAttribute(
            "aria-label",
            "Open menu"
        );

        navDropdown.classList.remove("open");
    }

});



dropdownToggle.addEventListener("click", function (event) {

    event.preventDefault();

    if (window.innerWidth <= 768) {

        navDropdown.classList.toggle("open");

    }

});



const navLinks =
    document.querySelectorAll(
        ".nav-link, .dropdown-link, .mobile-login"
    );


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth <= 768) {

            navMenu.classList.remove("active");

            navDropdown.classList.remove("open");

            menuIcon.className =
                "bi bi-list";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.setAttribute(
                "aria-label",
                "Open menu"
            );
        }

    });

});



window.addEventListener("resize", function () {

    if (window.innerWidth > 768) {

        navMenu.classList.remove("active");

        navDropdown.classList.remove("open");

        menuIcon.className =
            "bi bi-list";

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );
    }

});
















document.addEventListener("DOMContentLoaded", function () {

    const navLinks =
        document.querySelectorAll(".nav-link");

    const dropdownLinks =
        document.querySelectorAll(".dropdown-link");

    const homeButton =
        document.querySelector(".nav-dropdown-toggle");


    let currentPage =
        window.location.pathname
            .split("/")
            .pop()
            .toLowerCase();


    /*
       If URL is:

       https://example.com/

       treat it as index.html
    */

    if (
        currentPage === "" ||
        currentPage === "/"
    ) {
        currentPage = "index.html";
    }



    navLinks.forEach(function (link) {

        link.classList.remove("active");

        link.removeAttribute("aria-current");

    });


    dropdownLinks.forEach(function (link) {

        link.classList.remove("active");

        link.removeAttribute("aria-current");

    });


    if (homeButton) {

        homeButton.classList.remove("active");

        homeButton.removeAttribute("aria-current");

    }


    navLinks.forEach(function (link) {

        let href =
            link.getAttribute("href");

        if (!href) return;


        /*
           Remove query and hash
        */

        href =
            href
                .split("?")[0]
                .split("#")[0];


        /*
           Get only filename
        */

        let linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();



        if (linkPage === currentPage) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );

        }

    });



    let homePageSelected = false;


    dropdownLinks.forEach(function (link) {

        let href =
            link.getAttribute("href");

        if (!href) return;


        href =
            href
                .split("?")[0]
                .split("#")[0];


        let linkPage =
            href
                .split("/")
                .pop()
                .toLowerCase();


        if (linkPage === currentPage) {

            link.classList.add("active");

            link.setAttribute(
                "aria-current",
                "page"
            );

            homePageSelected = true;

        }

    });


    if (
        homePageSelected &&
        homeButton
    ) {

        homeButton.classList.add("active");

        homeButton.setAttribute(
            "aria-current",
            "page"
        );

    }

});








document.addEventListener("DOMContentLoaded", function () {


    const hero = document.querySelector(".premium-hero");

    if (!hero) return;



    const counters = hero.querySelectorAll(".counter");

    const counterObserver = new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (!entry.isIntersecting) return;

                const counter = entry.target;
                const target = Number(counter.dataset.target);

                let current = 0;

                const duration = 1600;
                const startTime = performance.now();


                function updateCounter(currentTime) {

                    const elapsed = currentTime - startTime;

                    const progress = Math.min(
                        elapsed / duration,
                        1
                    );


                    /* Smooth ease-out */
                    const eased =
                        1 - Math.pow(1 - progress, 4);


                    current = Math.floor(
                        eased * target
                    );


                    counter.textContent = current;


                    if (progress < 1) {

                        requestAnimationFrame(
                            updateCounter
                        );

                    } else {

                        counter.textContent = target;

                    }

                }


                requestAnimationFrame(
                    updateCounter
                );

                observer.unobserve(counter);

            });

        },
        {
            threshold: .6
        }
    );


    counters.forEach(function (counter) {

        counterObserver.observe(counter);

    });



    const visual =
        hero.querySelector(".premium-hero-visual");

    const imageCard =
        hero.querySelector(".hero-image-card");

    const waterCard =
        hero.querySelector(".hero-water-card");

    const growthCard =
        hero.querySelector(".hero-growth-card");

    const badge =
        hero.querySelector(".hero-round-badge");


    if (visual && window.matchMedia("(min-width: 769px)").matches) {

        visual.addEventListener("mousemove", function (event) {

            const rect =
                visual.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                .5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                .5;


            if (imageCard) {

                imageCard.style.transform =
                    `translate(${x * 7}px, ${y * 7}px)`;

            }


            if (waterCard) {

                waterCard.style.transform =
                    `translate(${x * -13}px, ${y * -9}px)`;

            }


            if (growthCard) {

                growthCard.style.transform =
                    `translate(${x * 12}px, ${y * 8}px)`;

            }


            if (badge) {

                badge.style.transform =
                    `translate(${x * 10}px, ${y * 10}px)`;

            }

        });


        visual.addEventListener("mouseleave", function () {

            if (imageCard) {
                imageCard.style.transform = "";
            }

            if (waterCard) {
                waterCard.style.transform = "";
            }

            if (growthCard) {
                growthCard.style.transform = "";
            }

            if (badge) {
                badge.style.transform = "";
            }

        });

    }



    const buttons =
        hero.querySelectorAll(".hero-btn");


    buttons.forEach(function (button) {

        button.addEventListener("click", function (event) {

            const ripple =
                document.createElement("span");

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );


            ripple.style.position = "absolute";
            ripple.style.width = size + "px";
            ripple.style.height = size + "px";
            ripple.style.borderRadius = "50%";
            ripple.style.background =
                "rgba(255,255,255,.18)";
            ripple.style.left =
                (event.clientX - rect.left - size / 2) + "px";
            ripple.style.top =
                (event.clientY - rect.top - size / 2) + "px";
            ripple.style.transform = "scale(0)";
            ripple.style.pointerEvents = "none";
            ripple.style.zIndex = "1";


            button.appendChild(ripple);


            ripple.animate(
                [
                    {
                        transform: "scale(0)",
                        opacity: .8
                    },
                    {
                        transform: "scale(1)",
                        opacity: 0
                    }
                ],
                {
                    duration: 650,
                    easing: "ease-out"
                }
            );


            setTimeout(function () {

                ripple.remove();

            }, 700);

        });

    });





    const scrollButton =
        hero.querySelector(".hero-scroll");


    if (scrollButton) {

        scrollButton.addEventListener(
            "click",
            function (event) {

                const targetId =
                    scrollButton.getAttribute("href");

                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    }



    const themeToggle =
        document.getElementById("themeToggle");


    if (themeToggle) {

        themeToggle.addEventListener(
            "click",
            function () {

                /*
                 Your existing theme code can
                 control body[data-theme].
                 This hero automatically follows
                 the CSS variables.
                */

                hero.classList.add(
                    "theme-transition"
                );


                setTimeout(function () {

                    hero.classList.remove(
                        "theme-transition"
                    );

                }, 400);

            }
        );

    }

});











document.addEventListener("DOMContentLoaded", function () {

    const snapshotStats = document.querySelectorAll(".snapshot-stat strong");

    if (!snapshotStats.length) return;

    const animateCounter = (element) => {

        const originalText = element.textContent.trim();

        /* Keep infinity unchanged */
        if (originalText === "∞") return;

        /* Extract number and suffix */
        const match = originalText.match(/^(\d+)(.*)$/);

        if (!match) return;

        const target = parseInt(match[1], 10);
        const suffix = match[2];

        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function updateCounter(currentTime) {

            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            /* Smooth ease-out animation */
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const currentValue = Math.floor(easeOut * target);

            /* Keep leading zero for 01 / 06 */
            let displayValue;

            if (target < 10) {
                displayValue = String(currentValue).padStart(2, "0");
            } else {
                displayValue = currentValue;
            }

            element.textContent = displayValue + suffix;

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                /* Make sure final value is exact */
                element.textContent = originalText;
            }
        }

        requestAnimationFrame(updateCounter);
    };


    /* Animate only when section becomes visible */
    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    snapshotStats.forEach((stat, index) => {

                        setTimeout(() => {
                            animateCounter(stat);
                        }, index * 180);

                    });

                    observerInstance.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.35
        }
    );


    const snapshotSection = document.querySelector(".about-snapshot");

    if (snapshotSection) {
        observer.observe(snapshotSection);
    }

});
