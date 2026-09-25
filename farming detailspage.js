

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

    const faqSection = document.querySelector(".service-faq");

    if (!faqSection) return;



    const faqItems =
        faqSection.querySelectorAll(".faq-item");



    faqItems.forEach(function (item, index) {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            question.querySelector("i");


        if (!question || !answer) return;





        if (item.classList.contains("active")) {

            answer.style.maxHeight =
                answer.scrollHeight + "px";

            question.setAttribute(
                "aria-expanded",
                "true"
            );

            if (icon) {
                icon.className =
                    "bi bi-dash";
            }

        } else {

            answer.style.maxHeight = "0px";

            question.setAttribute(
                "aria-expanded",
                "false"
            );

            if (icon) {
                icon.className =
                    "bi bi-plus";
            }

        }



        

        if (!question.id) {

            question.id =
                "faq-question-" + (index + 1);

        }

        answer.setAttribute(
            "role",
            "region"
        );

        answer.setAttribute(
            "aria-labelledby",
            question.id
        );

    });






    faqItems.forEach(function (item) {

        const question =
            item.querySelector(".faq-question");

        const answer =
            item.querySelector(".faq-answer");

        const icon =
            question.querySelector("i");


        question.addEventListener(
            "click",
            function () {

                const isActive =
                    item.classList.contains("active");








                faqItems.forEach(function (otherItem) {

                    if (otherItem === item) return;

                    const otherQuestion =
                        otherItem.querySelector(
                            ".faq-question"
                        );

                    const otherAnswer =
                        otherItem.querySelector(
                            ".faq-answer"
                        );

                    const otherIcon =
                        otherQuestion
                            ? otherQuestion.querySelector("i")
                            : null;


                    otherItem.classList.remove(
                        "active"
                    );

                    if (otherAnswer) {

                        otherAnswer.style.maxHeight =
                            "0px";

                    }

                    if (otherQuestion) {

                        otherQuestion.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }

                    if (otherIcon) {

                        otherIcon.className =
                            "bi bi-plus";

                    }

                });






                if (!isActive) {

                    item.classList.add(
                        "active"
                    );

                    answer.style.maxHeight =
                        answer.scrollHeight + "px";

                    question.setAttribute(
                        "aria-expanded",
                        "true"
                    );

                    if (icon) {

                        icon.className =
                            "bi bi-dash";

                    }

                } else {

                    item.classList.remove(
                        "active"
                    );

                    answer.style.maxHeight =
                        "0px";

                    question.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                    if (icon) {

                        icon.className =
                            "bi bi-plus";

                    }

                }

            }
        );

    });







    window.addEventListener(
        "resize",
        function () {

            faqItems.forEach(function (item) {

                if (!item.classList.contains("active"))
                    return;

                const answer =
                    item.querySelector(".faq-answer");

                if (!answer) return;

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            });

        }
    );



    faqItems.forEach(function (item) {

        const answer =
            item.querySelector(".faq-answer");

        if (!answer) return;

        answer.style.overflow = "hidden";

        answer.style.transition =
            "max-height .4s ease";

    });



    const contactButton =
        faqSection.querySelector(
            ".faq-contact-btn"
        );


    if (contactButton) {

        contactButton.addEventListener(
            "click",
            function () {

                contactButton.classList.add(
                    "faq-btn-clicked"
                );

                setTimeout(function () {

                    contactButton.classList.remove(
                        "faq-btn-clicked"
                    );

                }, 300);

            }
        );

    }



    const html =
        document.documentElement;


    const directionObserver =
        new MutationObserver(function () {

            const direction =
                html.getAttribute("dir");

            if (direction === "rtl") {

                faqSection.classList.add(
                    "faq-rtl"
                );

            } else {

                faqSection.classList.remove(
                    "faq-rtl"
                );

            }

        });


    directionObserver.observe(
        html,
        {
            attributes: true,
            attributeFilter: ["dir"]
        }
    );


    /* Initial RTL state */

    if (
        html.getAttribute("dir") === "rtl"
    ) {

        faqSection.classList.add(
            "faq-rtl"
        );

    }


    /* =====================================================
       DARK MODE SUPPORT
       Your existing body[data-theme] controls colors.
    ===================================================== */

    const body =
        document.body;


    const themeObserver =
        new MutationObserver(function () {

            if (
                body.getAttribute("data-theme") === "dark"
            ) {

                faqSection.classList.add(
                    "faq-dark"
                );

            } else {

                faqSection.classList.remove(
                    "faq-dark"
                );

            }

        });


    themeObserver.observe(
        body,
        {
            attributes: true,
            attributeFilter: ["data-theme"]
        }
    );


    /* =====================================================
       INITIAL DARK MODE
    ===================================================== */

    if (
        body.getAttribute("data-theme") === "dark"
    ) {

        faqSection.classList.add(
            "faq-dark"
        );

    }

});
