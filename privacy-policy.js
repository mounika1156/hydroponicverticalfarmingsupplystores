document.addEventListener("DOMContentLoaded", function(){

  const body = document.body;
  const html = document.documentElement;

  const themeToggle =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  const rtlToggle =
    document.getElementById("rtlToggle");

  const topButton =
    document.getElementById("privacyTop");

  const mobileToggle =
    document.getElementById("mobilePolicyToggle");

  const mobileMenu =
    document.getElementById("mobilePolicyMenu");

  const mobileIcon =
    document.getElementById("mobilePolicyIcon");

  const policyLinks =
    document.querySelectorAll(".policy-nav a");



  const savedTheme =
    localStorage.getItem("greengrow-theme");

  if(savedTheme === "dark"){

    body.setAttribute(
      "data-theme",
      "dark"
    );

  }


  function updateTheme(){

    if(
      body.getAttribute("data-theme")
      === "dark"
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
        body.getAttribute("data-theme")
        === "dark"
      ){

        body.removeAttribute(
          "data-theme"
        );

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



  const savedDirection =
    localStorage.getItem(
      "greengrow-direction"
    );


  if(savedDirection === "rtl"){

    html.setAttribute(
      "dir",
      "rtl"
    );

  }else{

    html.setAttribute(
      "dir",
      "ltr"
    );

  }


  rtlToggle.addEventListener(
    "click",
    function(){

      if(
        html.getAttribute("dir")
        === "rtl"
      ){

        html.setAttribute(
          "dir",
          "ltr"
        );

        localStorage.setItem(
          "greengrow-direction",
          "ltr"
        );

      }else{

        html.setAttribute(
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



  if(mobileToggle){

    mobileToggle.addEventListener(
      "click",
      function(){

        mobileMenu.classList.toggle(
          "open"
        );

        if(
          mobileMenu.classList.contains(
            "open"
          )
        ){

          mobileIcon.className =
            "bi bi-chevron-up";

        }else{

          mobileIcon.className =
            "bi bi-chevron-down";

        }

      }
    );


    mobileMenu
      .querySelectorAll("a")
      .forEach(function(link){

        link.addEventListener(
          "click",
          function(){

            mobileMenu.classList.remove(
              "open"
            );

            mobileIcon.className =
              "bi bi-chevron-down";

          }
        );

      });

  }



  const sections =
    document.querySelectorAll(
      ".policy-section"
    );


  const observer =
    new IntersectionObserver(
      function(entries){

        entries.forEach(function(entry){

          if(entry.isIntersecting){

            policyLinks.forEach(
              function(link){

                link.classList.remove(
                  "active"
                );

              }
            );


            const active =
              document.querySelector(
                '.policy-nav a[href="#' +
                entry.target.id +
                '"]'
              );


            if(active){

              active.classList.add(
                "active"
              );

            }

          }

        });

      },
      {
        rootMargin:
          "-15% 0px -70% 0px"
      }
    );


  sections.forEach(function(section){

    observer.observe(section);

  });



  window.addEventListener(
    "scroll",
    function(){

      if(window.scrollY > 400){

        topButton.classList.add(
          "show"
        );

      }else{

        topButton.classList.remove(
          "show"
        );

      }

    }
  );


  topButton.addEventListener(
    "click",
    function(){

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }
  );

});