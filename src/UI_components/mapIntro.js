const mapIntro = () => {
    const mapIntroContainer = document.querySelector(".map-intro-container");

    mapIntroContainer.innerHTML = `
    <div id="title">
      <h1> WHERE ARE WE? </h1>
    </div>
    <div id="mapIntroContainer">
      <div class="map-container" id="mapContainer">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9916.242692672078!2d-0.2394098302246093!3d51.58545138212817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487610c5529a0749%3A0xcdff3537b6aa4a45!2sHendon%2C%20London!5e0!3m2!1sen!2suk!4v1721213964448!5m2!1sen!2suk"
          width="600"
          height="450"
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
      </div>
      <div class="intro-text-section" id="introTextSection">
        <p>Nestled in the heart of Hendon, our agency boasts a deep-rooted connection to the local community and an intimate understanding of the property landscape in NW4 and its surroundings. With a team of seasoned professionals, each equipped with a wealth of expertise and a passion for real estate, we are dedicated to providing personalised solutions tailored to your unique requirements.</p>
      </div>
    `
}

export default mapIntro;