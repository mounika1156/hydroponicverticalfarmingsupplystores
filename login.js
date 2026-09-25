document.addEventListener("DOMContentLoaded", function(){

  const body = document.body;
  const html = document.documentElement;

  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  const rtlToggle = document.getElementById("rtlToggle");

  const password = document.getElementById("password");
  const passwordToggle = document.getElementById("passwordToggle");

  const loginForm = document.getElementById("loginForm");



  const savedTheme =
    localStorage.getItem("greengrow-theme");

  if(savedTheme === "dark"){
    body.setAttribute("data-theme","dark");
  }

  function updateTheme(){

    if(body.getAttribute("data-theme") === "dark"){

      themeIcon.className =
        "bi bi-sun-fill";

    }else{

      themeIcon.className =
        "bi bi-moon-stars-fill";

    }

  }

  updateTheme();


  themeToggle.addEventListener("click", function(){

    if(body.getAttribute("data-theme") === "dark"){

      body.removeAttribute("data-theme");

      localStorage.setItem(
        "greengrow-theme",
        "light"
      );

    }else{

      body.setAttribute(
        "data-theme",
        "dark"
      );

      localStorage.setItem(
        "greengrow-theme",
        "dark"
      );

    }

    updateTheme();

  });


  const savedDirection =
    localStorage.getItem("greengrow-direction");

  if(savedDirection === "rtl"){
    html.setAttribute("dir","rtl");
  }else{
    html.setAttribute("dir","ltr");
  }


  rtlToggle.addEventListener("click", function(){

    if(html.getAttribute("dir") === "rtl"){

      html.setAttribute("dir","ltr");

      localStorage.setItem(
        "greengrow-direction",
        "ltr"
      );

    }else{

      html.setAttribute("dir","rtl");

      localStorage.setItem(
        "greengrow-direction",
        "rtl"
      );

    }

  });


  passwordToggle.addEventListener(
    "click",
    function(){

      const icon =
        passwordToggle.querySelector("i");

      if(password.type === "password"){

        password.type = "text";

        icon.className =
          "bi bi-eye-slash";

      }else{

        password.type = "password";

        icon.className =
          "bi bi-eye";

      }

    }
  );



  document
    .querySelectorAll(".social-button")
    .forEach(function(button){

      button.addEventListener(
        "click",
        function(){

          const provider =
            button.dataset.provider;

          /*
            Connect these to your actual OAuth backend:

            Google   -> /auth/google
            Facebook -> /auth/facebook
            Apple    -> /auth/apple
          */

          console.log(
            provider + " authentication"
          );

        }
      );

    });


  loginForm.addEventListener(
    "submit",
    function(event){

      event.preventDefault();

      const email =
        document
          .getElementById("email")
          .value
          .trim();

      const passwordValue =
        password.value.trim();


      if(!email || !passwordValue){

        alert(
          "Please enter your email and password."
        );

        return;

      }


      /*
        Connect this form to your real
        authentication API/backend here.
      */

      console.log({
        email: email,
        password: passwordValue
      });

    }
  );

});