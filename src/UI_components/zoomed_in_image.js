import zoomedImg from "../images/zoomed-in-image.jpg";

const zoomedInImg = () => {
    const zoomedInImgContainer = document.querySelector(".zoomed-in-image");
    zoomedInImgContainer.innerHTML = `
    <img src=${zoomedImg} alt="img" />
    `
}

export default zoomedInImg;