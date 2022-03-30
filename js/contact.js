import navigation from "./components/navigation.js";

navigation();

document.addEventListener("DOMContentLoaded", () => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body").css({"width":w,"height":h});
});