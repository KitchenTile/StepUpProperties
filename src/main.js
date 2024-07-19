import mainText from "./UI_components/main_text"
import mapIntro from "./UI_components/mapIntro";
import peoplesInfo from "./UI_components/peoples_info";
import propertySlides from "./UI_components/properties_car";


mainText();
mapIntro();
peoplesInfo();
propertySlides();

const screen = document.getElementById("body")

screen.addEventListener('scroll', () => {
          const mainDiv = document.getElementById("mainContainer")
          const mainImageSection = document.getElementById("main_image");
          const mainTextSection = document.getElementById("main_text");
          const topBar = document.getElementById("topBar")
          const burgerMenu = document.getElementById("burger-menu");
          const icon = document.getElementById("icon");
      
  
          if (screen.scrollTop > 50) {
              mainImageSection.style.animation = "shrinkImage 1s forwards";
              mainTextSection.style.animation = "shrinkText 1s forwards";
              mainDiv.style.animation = "shrinkDiv 1s forwards"
              topBar.style.animation = "showHeader 0.7s forwards"
              burgerMenu.style.animation = "showHeader 0.7s forwards";
              icon.style.animation = "showHeader 1s forwards";
          } else {
            mainImageSection.style.animation = "enlargeImage 1s forwards";
            mainTextSection.style.animation = "enlargeText 1s forwards";
            mainDiv.style.animation = "enlargeDiv 1s forwards"
            topBar.style.animation = "hideHeader 0.7s forwards"
            burgerMenu.style.animation = "hideHeader 1s forwards";
            icon.style.animation = "hideHeader 0.7s forwards";
        }
      });


