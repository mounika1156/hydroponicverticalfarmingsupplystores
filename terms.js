document.addEventListener("DOMContentLoaded", function(){

  const body = document.body;
  const html = document.documentElement;

  const themeToggle =
    document.getElementById("themeToggle");

  const themeIcon =
    document.getElementById("themeIcon");

  const rtlToggle =
    document.getElementById("rtlToggle");

  const mobileToc =
    document.getElementById("mobileToc");

  const backTop =
    document.getElementById("backTop");

  const tocLinks =
    document.querySelectorAll(".toc-list a");

  const sections =
    document.querySelectorAll(".terms-section");


  /* =====================================================
     DARK MODE
  ====================================================== */

  const savedTheme =
    localStorage.getItem("greengrow-theme");

  if(savedTheme === "dark"){
    body.setAttribute("data-theme","dark");
  }


  function updateThemeIcon(){

    const isDark =
      body.getAttribute("data-theme") === "dark";

    if(isDark){

      themeIcon.className =
        "bi bi-sun-fill";

    }else{

      themeIcon.className =
        "bi bi-moon-stars-fill";

    }

  }

  updateThemeIcon();


  themeToggle.addEventListener("click", function(){

    const isDark =
      body.getAttribute("data-theme") === "dark";


    if(isDark){

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


    updateThemeIcon();

  });


  /* =====================================================
     RTL / LTR
  ====================================================== */

  const savedDirection =
    localStorage.getItem("greengrow-direction");


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


  rtlToggle.addEventListener("click", function(){

    const currentDirection =
      html.getAttribute("dir");


    if(currentDirection === "rtl"){

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

  });


  /* =====================================================
     MOBILE TABLE OF CONTENTS
  ====================================================== */

  mobileToc.addEventListener(
    "change",
    function(){

      const targetId =
        this.value;


      if(!targetId){
        return;
      }


      const target =
        document.getElementById(targetId);


      if(target){

        target.scrollIntoView({
          behavior:"smooth",
          block:"start"
        });

      }

    }
  );


  /* =====================================================
     ACTIVE DESKTOP TOC
  ====================================================== */

  const observer =
    new IntersectionObserver(
      function(entries){

        entries.forEach(function(entry){

          if(entry.isIntersecting){

            tocLinks.forEach(function(link){

              link.classList.remove("active");

            });


            const activeLink =
              document.querySelector(
                '.toc-list a[href="#' +
                entry.target.id +
                '"]'
              );


            if(activeLink){

              activeLink.classList.add(
                "active"
              );

            }


            if(mobileToc){

              mobileToc.value =
                entry.target.id;

            }

          }

        });

      },
      {
        rootMargin:"-20% 0px -65% 0px",
        threshold:0
      }
    );


  sections.forEach(function(section){

    observer.observe(section);

  });


  /* =====================================================
     DESKTOP TOC SMOOTH SCROLL
  ====================================================== */

  tocLinks.forEach(function(link){

    link.addEventListener(
      "click",
      function(event){

        event.preventDefault();


        const target =
          document.querySelector(
            link.getAttribute("href")
          );


        if(target){

          target.scrollIntoView({
            behavior:"smooth",
            block:"start"
          });

        }

      }
    );

  });


  /* =====================================================
     BACK TO TOP
  ====================================================== */

  function updateBackTop(){

    if(window.scrollY > 500){

      backTop.classList.add("show");

    }else{

      backTop.classList.remove("show");

    }

  }


  window.addEventListener(
    "scroll",
    updateBackTop,
    {passive:true}
  );


  updateBackTop();


  backTop.addEventListener(
    "click",
    function(){

      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

    }
  );

});