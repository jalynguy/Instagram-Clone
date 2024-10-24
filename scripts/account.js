
const postsContainer = document.getElementById("posts");
const profileHeader = document.querySelector(".profile-img");
const followers = document.querySelector(".number");
let numberOfPosts = Math.floor(Math.random() * 48);

followers.innerHTML = numberOfPosts;


function getImg(classToAdd, container) {
    let img = new Image();
    const random = Math.floor(Math.random() * 10000);
    img.src = `https://loremflickr.com/200/200?random=${random}`;

    img.classList.add(classToAdd);
    container.appendChild(img);
}

getImg("profile-pic", profileHeader);

for (let i = 0; i < numberOfPosts; i++) {
    getImg("post", postsContainer);
}