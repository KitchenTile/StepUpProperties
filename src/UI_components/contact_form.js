const contact_form = () => {
    const contactFormDiv = document.querySelector("#contactFormDiv");

    contactFormDiv.innerHTML = `
    <div class = "form-container">
        <form>
            <div class="contact-text" id="title">
                <h2>FILL IN THE FORM BELOW TO EMAIL </h2>
                <hr>
            </div>
            <div class="contact-form">
                <input type="text" name="name" placeholder="Full Name" class="contact-field" required>
                <input type="text" name="Email" placeholder="Your Email" class="contact-field" required>
                <textarea name="message" placeholder="Type your request here" class="contact-field" id="message" required></textarea>
                <button type="submit"> SUBMIT </button>
            </div>
        </form>
    </div>`
}

export default contact_form;