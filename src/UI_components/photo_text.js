import hendon_pic1 from "../images/hendonpicture.jpg"

const photoTextContainer = () => {
    const photoTextContainer = document.querySelector(".photo-text-container");
    photoTextContainer.innerHTML = `
    <div class="photo">
        <img src=${hendon_pic1} alt="hendon_pic1" />
    </div>
    <div class="text">
        <p>At StepUp Properties, we recognise that buying or selling a property is not just a transaction; it’s a significant milestone in your life. That’s why we approach every interaction with the utmost care, transparency, and integrity.</p>
    </div>
    <div class="text">
        <p>At StepUp Properties, we recognise that buying or selling a property is not just a transaction; it’s a significant milestone in your life. That’s why we approach every interaction with the utmost care, transparency, and integrity.</p>
    </div>
    <div class="photo">
        <img src=${hendon_pic1} alt="hendon_pic1" />
    </div>
    
    `
    
}

export default photoTextContainer;