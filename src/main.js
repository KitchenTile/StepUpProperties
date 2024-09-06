import contact_form from "./UI_components/contact_form";
import mainText from "./UI_components/main_text"
import mapIntro from "./UI_components/mapIntro";
import peoplesInfo from "./UI_components/peoples_info";
import photoTextContainer from "./UI_components/photo_text";
import propertySlides from "./UI_components/properties_car";
import socialsComp from "./UI_components/socials_comp";
import zoomedInImg from "./UI_components/zoomed_in_image";


mainText();
mapIntro();
peoplesInfo();
propertySlides();
contact_form();
socialsComp();
photoTextContainer();
zoomedInImg();


const screen = document.getElementById("body")

screen.addEventListener('scroll', () => {
          const mainDiv = document.getElementById("mainContainer")
          const mainImageSection = document.getElementById("main_image");
          const mainTextSection = document.getElementById("main_text");
          const topBar = document.getElementById("topBar")
          const burgerMenu = document.getElementById("burger-menu");
          const icon = document.getElementById("icon");
          const zoomImg = document.querySelector(".zoomed-in-image img");
          const scrollImg = document.querySelector("#photo1");
          const scrollImg2 = document.querySelector("#photo2");


          let scrollPos = screen.scrollTop;
          let newWidth = 100 + scrollPos / 10 + '%';

          let topAfterScroll = 200 - scrollPos / 10 + "px";

          let newHeight = 80 + scrollPos / 75 + '%'

          zoomImg.style.width = newWidth;
          // zoomImg.style.top = newTop;
          // zoomImg.style.filter = 'blur('+blurValue+')';

          scrollImg.style.height = newHeight;
          
          scrollImg2.style.top = topAfterScroll;


      
  
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

