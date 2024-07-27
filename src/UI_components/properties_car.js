import propertyData from "../data/propertiesData"

const propertySlides = () => {
    const slides = document.getElementById("slides");
    const navContainer = document.querySelector(".slides-nav");
    navContainer.innerHTML = "";
    slides.innerHTML = "";

    propertyData.forEach((property, index) => {
        slides.innerHTML +=`
            <div class="slide" id="${index + 1}">
                <iframe
                    src=${property.mapSrc}
                    width="40%"
                    height="70%" 
                    style="border-radius:10px;" 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                <div class="info">
                    <h1> ${property.address} </h1>
                    <p> ${property.description} </p>
                </div>
                <a class="slide-prev" href="#${index === 0 ? propertyData.length : index}" title="Prev"></a>
                <a class="slide-next" href="#${(index + 2) > propertyData.length ? 1 : index + 2}" title="Next"></a>
            </div>
            `
    });

    let navLinks = "";
    propertyData.forEach((_, index) => {
        navLinks += `<a class="slides-navlink" href="#${index + 1}"></a>`;
    });
    navContainer.innerHTML = navLinks;

}

export default propertySlides;