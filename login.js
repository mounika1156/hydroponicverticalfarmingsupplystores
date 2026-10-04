  const passwordInput =
            document.getElementById("ggLoginPassword");

        const passwordToggle =
            document.getElementById("ggPasswordToggle");

        const passwordIcon =
            document.getElementById("ggPasswordIcon");


        if (passwordToggle) {

            passwordToggle.addEventListener(
                "click",
                function () {


                    if (
                        passwordInput.type === "password"
                    ) {


                        passwordInput.type = "text";


                        passwordIcon.className =
                            "bi bi-eye-slash";


                        passwordToggle.setAttribute(
                            "aria-label",
                            "Hide password"
                        );


                        passwordToggle.setAttribute(
                            "title",
                            "Hide password"
                        );


                    } else {


                        passwordInput.type =
                            "password";


                        passwordIcon.className =
                            "bi bi-eye";


                        passwordToggle.setAttribute(
                            "aria-label",
                            "Show password"
                        );


                        passwordToggle.setAttribute(
                            "title",
                            "Show password"
                        );

                    }

                }
            );

        }



        /* =====================================================
           LOGIN FORM
        ====================================================== */

        const loginForm =
            document.getElementById("ggLoginForm");

        const loginButton =
            document.getElementById("ggLoginSubmit");

        const loginButtonText =
            document.getElementById("ggLoginButtonText");


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                function (event) {


                    event.preventDefault();


                    loginButton.disabled = true;


                    loginButtonText.textContent =
                        "Signing In...";


                    setTimeout(
                        function () {


                            loginButton.disabled =
                                false;


                            loginButtonText.textContent =
                                "Sign In";


                        },
                        1200
                    );

                }
            );

        }



        /* =====================================================
           DARK MODE
        ====================================================== */

        const themeToggle =
            document.getElementById("themeToggle");

        const themeIcon =
            document.getElementById("themeIcon");


        const savedTheme =
            localStorage.getItem(
                "greengrow-theme"
            );


        function applyTheme(theme) {


            document.body.setAttribute(
                "data-theme",
                theme
            );


            if (theme === "dark") {


                themeIcon.className =
                    "bi bi-sun-fill";


                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to light mode"
                );


                themeToggle.setAttribute(
                    "title",
                    "Light mode"
                );


            } else {


                themeIcon.className =
                    "bi bi-moon-stars-fill";


                themeToggle.setAttribute(
                    "aria-label",
                    "Switch to dark mode"
                );


                themeToggle.setAttribute(
                    "title",
                    "Dark mode"
                );

            }

        }


        /* LOAD SAVED THEME */

        if (savedTheme === "dark") {

            applyTheme("dark");

        } else {

            applyTheme("light");

        }


        /* TOGGLE THEME */

        themeToggle.addEventListener(
            "click",
            function () {


                const currentTheme =
                    document.body.getAttribute(
                        "data-theme"
                    );


                const newTheme =
                    currentTheme === "dark"
                        ? "light"
                        : "dark";


                applyTheme(newTheme);


                localStorage.setItem(
                    "greengrow-theme",
                    newTheme
                );

            }
        );



        /* =====================================================
           RTL / LTR
        ====================================================== */

        const rtlToggle =
            document.getElementById("rtlToggle");


        const savedDirection =
            localStorage.getItem(
                "greengrow-direction"
            );


        /* LOAD SAVED DIRECTION */

        if (savedDirection === "rtl") {


            document.documentElement.setAttribute(
                "dir",
                "rtl"
            );


        } else {


            document.documentElement.setAttribute(
                "dir",
                "ltr"
            );

        }


        /* TOGGLE RTL */

        rtlToggle.addEventListener(
            "click",
            function () {


                const currentDirection =
                    document.documentElement
                    .getAttribute("dir");


                if (
                    currentDirection === "rtl"
                ) {


                    document.documentElement
                        .setAttribute(
                            "dir",
                            "ltr"
                        );


                    localStorage.setItem(
                        "greengrow-direction",
                        "ltr"
                    );


                } else {


                    document.documentElement
                        .setAttribute(
                            "dir",
                            "rtl"
                        );


                    localStorage.setItem(
                        "greengrow-direction",
                        "rtl"
                    );

                }

            }
        );
