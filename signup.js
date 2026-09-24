document.addEventListener("DOMContentLoaded", function(){

  const body = document.body;
  const html = document.documentElement;

  const themeToggle =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  const rtlToggle =
    document.getElementById("rtlToggle");

  const signupForm =
    document.getElementById("signupForm");

  const password =
    document.getElementById("signupPassword");

  const confirmPassword =
    document.getElementById("confirmPassword");

  const passwordToggle =
    document.getElementById("passwordToggle");

  const confirmPasswordToggle =
    document.getElementById("confirmPasswordToggle");


  /* =================================
     THEME
  ================================= */

  const savedTheme =
    localStorage.getItem("greengrow-theme");

  if(savedTheme === "dark"){
    body.setAttribute("data-theme","dark");
  }


  function updateTheme(){

    if(
      body.getAttribute("data-theme") === "dark"
    ){

      themeIcon.className =
        "bi bi-sun-fill";

    }else{

      themeIcon.className =
        "bi bi-moon-stars-fill";

    }

  }

  updateTheme();


  themeToggle.addEventListener(
    "click",
    function(){

      if(
        body.getAttribute("data-theme") === "dark"
      ){

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

    }
  );


  /* =================================
     RTL
  ================================= */

  const savedDirection =
    localStorage.getItem("greengrow-direction");

  if(savedDirection === "rtl"){

    html.setAttribute("dir","rtl");

  }else{

    html.setAttribute("dir","ltr");

  }


  rtlToggle.addEventListener(
    "click",
    function(){

      if(
        html.getAttribute("dir") === "rtl"
      ){

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

    }
  );


  /* =================================
     PASSWORD TOGGLE
  ================================= */

  function setupPasswordToggle(
    input,
    button
  ){

    button.addEventListener(
      "click",
      function(){

        const icon =
          button.querySelector("i");

        if(input.type === "password"){

          input.type = "text";

          icon.className =
            "bi bi-eye-slash";

          button.setAttribute(
            "aria-label",
            "Hide password"
          );

        }else{

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
    password,
    passwordToggle
  );

  setupPasswordToggle(
    confirmPassword,
    confirmPasswordToggle
  );


  /* =================================
     SOCIAL SIGN UP
  ================================= */

  document
    .querySelectorAll(".social-signup")
    .forEach(function(button){

      button.addEventListener(
        "click",
        function(){

          const provider =
            button.dataset.provider;

          /*
            Connect your real OAuth
            provider/backend here.

            Google:
            /auth/google

            Facebook:
            /auth/facebook

            Apple:
            /auth/apple
          */

          console.log(
            provider + " signup"
          );

        }
      );

    });


  /* =================================
     FORM SUBMIT
  ================================= */

  signupForm.addEventListener(
    "submit",
    function(event){

      event.preventDefault();


      const name =
        document
          .getElementById("fullName")
          .value
          .trim();

      const email =
        document
          .getElementById("signupEmail")
          .value
          .trim();

      const phone =
        document
          .getElementById("phone")
          .value
          .trim();

      const passwordValue =
        password.value;

      const confirmValue =
        confirmPassword.value;

      const terms =
        document.getElementById("terms").checked;


      /* REQUIRED VALIDATION */

      if(!name){

        alert("Please enter your full name.");

        return;
      }


      if(!email){

        alert("Please enter your email address.");

        return;
      }


      if(!passwordValue){

        alert("Please create a password.");

        return;
      }


      if(passwordValue !== confirmValue){

        alert("Passwords do not match.");

        return;
      }


      if(!terms){

        alert(
          "Please accept the Terms and Privacy Policy."
        );

        return;
      }


      /*
        Send these values to your real
        registration API/backend.

        Example:

        fetch("/api/register", {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            password:passwordValue
          })
        });
      */

      console.log({
        name:name,
        email:email,
        phone:phone
      });

    }
  );

});