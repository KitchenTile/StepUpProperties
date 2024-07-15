import mainText from "./UI_components/main_text"

mainText();

const screen = document.getElementById("body")

screen.addEventListener('scroll', () => {
          const mainImageSection = document.getElementById("main_image");
          const mainTextSection = document.getElementById("main_text");
          const topBar = document.getElementById("topBar")
          const burgerMenu = document.getElementById("burger-menu");
          const icon = document.getElementById("icon");
      
  
          if (screen.scrollTop > 50) {
              console.log("Scrolling down");
              mainImageSection.style.animation = "shrinkImage 1s forwards";
              mainTextSection.style.animation = "shrinkText 1s forwards";

              setTimeout(() => {
                topBar.style.opacity = 1

                burgerMenu.style.opacity = 1;
                // icon.style.opacity = 1;
            }, 1000); 
          } else if (screen.scrollTop < 50) {
            mainImageSection.style.animation = "enlargeImage 1s forwards";
            mainTextSection.style.animation = "enlargeText 1s forwards";
            topBar.style.opacity = 0;
        } else {
              console.log("Scrolling up");
              // mainImageSection.style.animation = "none";
              // mainTextSection.style.animation = "none";
          }
      });

// import mainText from "./UI_components/main_text";

// // Initialize the main text
// mainText();

// // Check if the script is loaded
// console.log("main.js loaded");

// // Ensure the document is fully loaded before attaching the scroll event listener
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log("DOM fully loaded and parsed");

//     // Attach the scroll event listener
//     document.getElementById("body").addEventListener('scroll', () => {
//         const mainImageSection = document.getElementById("mainImageSection");
//         const mainTextSection = document.getElementById("mainTextSection");

//         // Check the current scroll position
//         const scrollPosition = window.scrollY || document.documentElement.scrollTop;
//         console.log("Current scroll position:", scrollPosition); // Log the current scroll position

//         if (scrollPosition > 1) {
//             console.log("Scrolling down");
//             mainImageSection.style.animation = "shrinkImage 0.5s forwards";
//             mainTextSection.style.animation = "shrinkText 0.5s forwards";
//         } else {
//             console.log("Scrolling up");
//             mainImageSection.style.animation = "none";
//             mainTextSection.style.animation = "none";
//         }
//     });

//     // Add a click event listener to ensure events are being registered
//     window.addEventListener('click', () => {
//         console.log("Click event detected");
//     });
// });