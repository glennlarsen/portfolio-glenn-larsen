

export default function navigation() {

    document.addEventListener("DOMContentLoaded", () => {
        let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        $("html, body").css({"width":w,"height":h});
    });

    const { pathname } = document.location;
    const navigation = document.querySelector(".navigation");

    navigation.innerHTML = `<button onclick="window.location.href = '/';" class="nav-btn nav-btn__tl ${pathname === "/" || pathname === "/index.html" ? "active" : ""}" aria-current="page">Home</button>
                            <button onclick="window.location.href = 'projects.html';" class="nav-btn nav-btn__tr ${pathname === "/projects.html" ? "active" : ""}">Projects</button>
                            <button onclick="window.location.href = 'about.html';" class="nav-btn nav-btn__bl ${pathname === "/about.html" ? "active" : ""}">About</button>
                            <button onclick="window.location.href = 'contact.html';" class="nav-btn nav-btn__br ${pathname === "/contact.html" ? "active" : ""}">Contact</button>`;
}



