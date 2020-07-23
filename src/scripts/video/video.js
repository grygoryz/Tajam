const player = document.createElement("iframe");
player.classList.add("video__player");
player.src = "https://player.vimeo.com/video/310197402?autoplay=1&title=0&byline=0&portrait=0";
player.allow = "autoplay;fullscreen";
player.allowFullscreen = true;

const container = document.querySelector(".about__video");
const preview = document.querySelector(".preview-video");
const triangle = document.querySelector(".play-button__triangle");

preview.addEventListener("click", ShowPlayer);

preview.onmousedown = () => {
    triangle.classList.add("play-button__triangle_active");
};

preview.onmouseup = () => {
    triangle.classList.remove("play-button__triangle_active");
};

function ShowPlayer() {
    hidePreview();
    container.append(player);
}

function hidePreview() {
    preview.classList.add("preview-video_fading");

    preview.ontransitionend = () => {
        preview.style.display = "none";
    }
}







