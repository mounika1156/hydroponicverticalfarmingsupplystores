


        function setupPasswordToggle(
            inputId,
            buttonId,
            iconId
        ) {

            const input =
                document.getElementById(inputId);

            const button =
                document.getElementById(buttonId);

            const icon =
                document.getElementById(iconId);


            if (!button) return;


            button.addEventListener(
                "click",
                function () {


                    if (
                        input.type === "password"
                    ) {


                        input.type = "text";


                        icon.className =
                            "bi bi-eye-slash";


                        button.setAttribute(
                            "aria-label",
                            "Hide password"
                        );


                    } else {


                        input.type = "password";


                        icon.className =
                            "bi bi-eye";


                        button.setAttribute(
                            "aria-label",
                            "Show password"
                        );

                    }

                }
            );

        }


        setupPasswordToggle(
            "ggSignupPassword",
            "ggPasswordToggle",
            "ggPasswordIcon"
        );


        setupPasswordToggle(
            "ggSignupConfirmPassword",
            "ggConfirmPasswordToggle",
            "ggConfirmPasswordIcon"
        );



        const signupForm =
            document.getElementById(
                "ggSignupForm"
            );

        const signupButton =
            document.getElementById(
                "ggSignupSubmit"
            );

        const signupButtonText =
            document.getElementById(
                "ggSignupButtonText"
            );


        signupForm.addEventListener(
            "submit",
            function (event) {


                event.preventDefault();


                const password =
                    document.getElementById(
                        "ggSignupPassword"
                    ).value;


                const confirmPassword =
                    document.getElementById(
                        "ggSignupConfirmPassword"
                    ).value;


                /* PASSWORD MATCH */

                if (
                    password !== confirmPassword
                ) {


                    alert(
                        "Passwords do not match."
                    );


                    return;

                }


                /* BUTTON STATE */

                signupButton.disabled = true;


                signupButtonText.textContent =
                    "Creating Account...";


                setTimeout(
                    function () {


                        signupButton.disabled =
                            false;


                        signupButtonText.textContent =
                            "Create Account";


                    },
                    1200
                );

            }
        );




        const themeToggle =
            document.getElementById(
                "themeToggle"
            );

        const themeIcon =
            document.getElementById(
                "themeIcon"
            );


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


        if (savedTheme === "dark") {

            applyTheme("dark");

        } else {

            applyTheme("light");

        }


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



        const rtlToggle =
            document.getElementById(
                "rtlToggle"
            );


        const savedDirection =
            localStorage.getItem(
                "greengrow-direction"
            );


        if (savedDirection === "rtl") {

            document.documentElement
                .setAttribute(
                    "dir",
                    "rtl"
                );

        } else {

            document.documentElement
                .setAttribute(
                    "dir",
                    "ltr"
                );

        }


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