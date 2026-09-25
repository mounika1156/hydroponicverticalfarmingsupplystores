

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