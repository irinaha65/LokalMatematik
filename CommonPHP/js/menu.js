
// Hämta elementen från HTML


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
const menus=[
    {name: "Hem",
        link: "index.html" },
        {
        name: "Volym av en cylinder",
        link: "cylinderVolym.html" },
           {
        name: "Fylld cylinder",
        link: "cylinderFylld.html" },
         {
        name: "Trigonometri",
        link: "sinCos.html" },
         {
        name: "Behållare",
        link: "behållareFylld.html" },
    ]
//fylla sidopanelen med menyval
 
   $(document).ready(function() {
let tbody=$("#mainMenu"); 
if(tbody){
 const svg =`<svg
                                                        stroke="currentColor" fill="currentColor" stroke-width="0"
                                                        viewBox="0 0 24 24" height="20" width="20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        style="vertical-align: middle;">
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6z"></path>
                                                    </svg>`;
menus.forEach((menu) => {
 
    let row = `<tr><td><a href="${menu.link}" data-discover="true">${svg} ${menu.name}</a></td></tr>`;
    tbody.append(row);
});
}
let sidebar = $("#sidebar");

const closeBtn = ` <li id="closeBtn" style="text-align: end; margin-left: 80%; ">
      <svg preserveAspectRatio="xMidYMid meet" class="symbolIcon" viewBox="-76.8 -76.8 665.6 665.6" fill="#000"
          style="display: inline-block; box-sizing: content-box; background: rgb(255, 255, 255); width: 30px; height: 30px; ">
          <g
              style="fill-rule:evenodd;clip-rule:evenodd;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:1.5">
              <path d="M15.216 496.784 496.784 15.216m-481.568 0 481.568 481.568"
                  style="fill:none;stroke:#000;stroke-width:30px"></path>
          </g>
      </svg></li>`;

// 1. Lägg till stängknappen i sidebaren
sidebar.append(closeBtn);

// 2. Ändrat till jQuery-lyssnare och jQuerys .removeClass()
$("#closeBtn").on("click", () => {
    sidebar.removeClass("open");
});                                                

// 3. Loopa ut menyvalen (jQuerys .append() fungerar utmärkt här)
menus.forEach((menu) => {
    let row = `<li class="signupButton"><a href="${menu.link}" ><span class="name"> ${menu.name}</span></a></li>`;
    sidebar.append(row);
});
//console.log("menu.js loaded", sidebar, openBtn, closeBtn);
 $("#openBtn").on("click", () => {
      sidebar.addClass("open");
});


    });