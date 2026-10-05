
// Hämta elementen från HTML
const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
console.log("menu.js loaded", sidebar, openBtn, closeBtn);
openBtn.addEventListener("click", () => {
    sidebar.classList.add("open");
});

// Stäng panelen när man klickar på stäng-knappen
closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("open");
});
function getSVG(element) {
    if (element.svg_g) { return element.svg_g }
    else {
        let width = 23
        if (element.width) {
            width = element.width
        }
        let svgString =
            `<svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000"
    style="display: block; box-sizing: content-box; background: rgb(255, 255, 255); width:`
            + width + `px; height: 23px;">
    <g style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;
    stroke-linejoin:round;stroke-miterlimit:1.5">


        ` +
            element.svg +
            `
    </g>
</svg>`
        return svgString;
    }
}