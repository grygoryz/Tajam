const iframeContainer = document.createElement("div");
iframeContainer.style.cssText = "padding:42.55% 0 0 0;position:relative;";

const vimeoIframe = document.createElement("iframe");
vimeoIframe.style.cssText = "position:absolute;top:0;left:0;width:100%;height:100%;border-width:0px;";
vimeoIframe.src = "https://player.vimeo.com/video/310197402?autoplay=1&title=0&byline=0&portrait=0";
vimeoIframe.allow = "autoplay;fullscreen";
vimeoIframe.allowFullscreen = true;

iframeContainer.append(vimeoIframe);

const container = document.querySelector(".about__video");
const preview = document.querySelector(".video__preview");

preview.addEventListener("click", () => {
    preview.classList.add("video__preview_fading");
    container.append(iframeContainer);

    preview.ontransitionend = () => {
        preview.style.display = "none";
    }
});





