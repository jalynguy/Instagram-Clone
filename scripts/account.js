
// create an array of 24 images
const postsContainer = document.getElementById("posts");

function getImage() {
    let img = new Image();
    const random = Math.floor(Math.random() * 10000);
    img.src = `https://loremflickr.com/200/200?random=${random}`;
    img.classList.add("post");

    postsContainer.appendChild(img);
}
getImage();
getImage();
getImage();