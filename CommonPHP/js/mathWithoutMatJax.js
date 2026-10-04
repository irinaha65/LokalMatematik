//https://www.cdnfonts.com/latin-modern-math.font
const texElementDivs = { //\\bigg\\{\\begin{array} \\dfrac{a-1}{b-1}a+1 +456.9=-196.00-13x \\cr 3y = -196.00-13x\\end{array}"
    "mathX": '𝑥',
    "mathY": '𝒚',
    "mathZ": '𝒛',
    "grads": '˚',
    "plusminus": '±',
    "bracket-left": '{',
    "bracket-right": '}',
    dot: '⋅',
    fr: '<p>' + getFractionBlandad('Förkorta med c:', '±a', 'b') +
        getFractionBlandad('=', '±a/c', 'b/c') + '</p>' +
        '<p>' + getFractionBlandad('Förlänga med c:', '±a', 'b') +
        getFractionBlandad('=', '±ac', 'bc') + '</p>' +
        '<p>' + getFractionBlandad('Addera:', 'a', 'b') + '±' + getFractionDiv('c ', 'd') +
        getFractionBlandad(' = ', 'ad ± cb', 'bd') + '</p>' +
        '<p>' + getFractionBlandad('Multiplicera:', 'a', 'b') + '.' +
        getFractionDiv('c', 'd') + getFractionBlandad(' = ', 'ac', 'bd') + '</p>' +
        '<p>' + getFractionBlandad('Dividera: ', 'a', 'b') +
        getFractionBlandad(' / ', 'c ', 'd') + getFractionBlandad(' = ', 'a', 'b') + '.' +
        getFractionDiv('d', 'c') + getFractionBlandad(' = ', 'ad', 'bc') + '</p>',
    "ekv": '<p>  a𝑥 + b  = c𝑥 + d  &rarr; samla alla 𝑥 åt vänster</p><p> a𝑥 - c𝑥 = d - b &rarr; bryt ut 𝑥 </p><p> (a-c) 𝑥 = d - b  &rarr; dividera </p><p> ' +
        getFractionBlandad('𝑥 = ', '(d - b)', '(a - c) '),
    "bl": '<p> Term + term = summa, a + b  = c </p>' +
        '<p>Term - term = differensen, a - c = b  </p> ' +
        '<p>Faktor * factor = produkt, a * b = c </p>  ' +
        '<p>' + getFractionDiv('Täljare  ', 'nämnare  ') + ' = kvot, ' +
        getFractionDiv('a', 'b') + '= c </p>',
    "ekvsys": '<p> Additionsmetoden:  </p><p>' +
        getEqvSystem(' a𝑥 + b𝒚  = d ', '-a𝑥 + e𝒚  = c ') +
        '</p><p>b𝒚 + e𝒚 = d + c </p>' +
        '<p> Substitutionsmetoden:  </p><p>' +
        getEqvSystem('𝑥 + b𝒚  = d ', 'a𝑥 + e𝒚  = c ') + '<p> 𝑥= d - b𝒚 </p>' +
        '<p>a(d - b𝒚) + e𝒚 = c</p> ',
    "area": "<p>Rektangel area = ab</p>",
    "derivata": "<p> (kx<sup>n</sup>)´ = knx<sup>n-1</sup> <p> " +
        "<p> (ke<sup>nx</sup>)´ = kne<sup>nx</sup> <p> " + "<p> (ka<sup>nx</sup>)´ = ln(a)kna<sup>nx</sup> <p> ",
    "kvadrering": '<p> kvadrering: (a + b)<sup>2</sup> = a<sup>2</sup> + 2ab + b<sup>2</sup><p> ' +
        '<p> och (a - b)<sup>2</sup> = a<sup>2</sup> -2ab + b<sup>2</sup><p> ' + '<p>konjugat:  a<sup>2</sup> - b<sup>2</sup> = (a + b)(a - b)<p> ',
    "pq": '   <math display="block" ><mrow>' +
        '<msub> <mi>x</mi><mi>1,2</msub></mi> <mi>= -&nbsp;</mi>' +
        ' <mfrac >' +
        ' <mi>p</mi>' +
        '<mi>2</mi>' +
        '</mfrac><mi>	&plusmn;</mi>' +
        '<msqrt>' +
        '<msup>  ' +
        '<mrow>' +
        '<mo>(</mo>' +
        ' <mfrac >' +
        '<mi>p</mi>' +
        ' <mi>2</mi>' +
        ' </mfrac>' +
        '<mo>)</mo>' +
        '</mrow> ' +
        ' <mn>2</mn> ' +
        '</msup>' +
        '<mi>-&nbsp;q</mi>' +
        '</msqrt></mrow>' +
        '</math> '
    ,
    "trig": '<p> ' +
        'cosinussatsen : a²=b² + c² − 2bc⋅cosA  </p><p> ' +
        getFractionBlandad('sinussatsen :', 'a', 'sinA') +
        getFractionBlandad(' = ', 'b', 'sinB') +
        getFractionBlandad(' = ', ' c ', ' sinC ') +
        '</p>' + '<p>sinv = sin(180' + this.grads + ' − v) </p>',
    "hastighet": "<p>Hastighet och acceleration</p><p>" + getFractionBlandad("v(t) = s'(t) = ", 'ds', 'dt') +
        '</p>',
    "trdjepolynom": '<p> tredjegrads polynom: (a + b)<sup>3</sup> = a<sup>3</sup> + 3ab<sup>2</sup>  + 3a<sup>2</sup>b + b<sup>3</sup><p> ' +
        '<p> och (a - b)<sup>3</sup> = a<sup>3</sup> +3ab<sup>2</sup> - 3ab<sup>2</sup> + b<sup>3</sup><p> ',
    "primtal": "Ett primtal är ett naturligt tal som är större än 1 och inte har några andra positiva delare än 1 och talet självt. "
}
function losningsFormel(p, q) {
    return '   <math display="block" ><mrow>' +
        '<msub> <mi>x</mi><mi>1,2</msub></mi> <mi>= -&nbsp;</mi>' +
        ' <mfrac >' +
        ' <mi>' + p + '</mi>' +
        '<mi>2</mi>' +
        '</mfrac><mi>	&plusmn;</mi>' +
        '<msqrt>' +
        '<msup>  ' +
        '<mrow>' +
        '<mo>(</mo>' +
        ' <mfrac >' +
        '<mi>' + p + '</mi>' +
        ' <mi>2</mi>' +
        ' </mfrac>' +
        '<mo>)</mo>' +
        '</mrow> ' +
        ' <mn>2</mn> ' +
        '</msup>' +
        '<mi>-&nbsp;' + q + '</mi>' +
        '</msqrt></mrow>' +
        '</math> '
}
function getSquareRoot(num) {
    return '<span style="white-space: nowrap">&radic;<span style="text-decoration:overline;">&nbsp; '
        + num + '&nbsp;</span></span>'
}
function getFractionBlandad(hel, taljare, namnare) {
    return '<span>' + hel + '&nbsp;' + getFractionDiv(taljare, namnare) + '</span >'
}
function getFractionDiv(taljare, namnare) {
    return '<span class="frac"><sup>' +
        taljare + '</sup ><span>&frasl;</span><sub>' + namnare + '</sub></span >'
}
function getFractionRootDiv(taljare, namnare) {
    return '<span class="frac" style="text-decoration:overline;"><sup>' +
        taljare + '</sup ><span>&frasl;</span><sub>' + namnare + '</sub></span >'
}
function replaseAllminusplus(txt) {

    txt = txt.replaceAll("+ -", " - ").replaceAll("- +", " - ").replaceAll("- -", " + ").replaceAll("+ +", " + ").replaceAll("+-", " - ").replaceAll("-+", " - ").replaceAll("--", " + ").replaceAll("++", " + ");
    return txt.replaceAll("+ 0", "").replaceAll("- 0", "")
}


function getRandomPositiveExklArray(min, max, array) {
    nums = [];
    for (i = min; i <= max; i++) {
        if (array.includes(i)) continue;
        nums.push(i);
    }
    console.dir(nums);
    ind = getRandomInt(0, nums.length - 1)
    console.log(nums[ind])
    return nums[ind]
}
function toFixed3string(num) {
    return roundDecimalsZeros(num.toFixed(3))
}
function roundDecimalsZeros(num) {
    txt = "" + num;

    ind = txt.lastIndexOf('.');
    if (ind > 0) {
        for (k = 0; k < 3; k++) {
            ind1 = txt.lastIndexOf('0');
            if (ind1 == txt.length - 1) {
                txt = txt.substring(0, ind1);
                console.log(txt)
            }
        }
    }
    ind1 = txt.lastIndexOf('.');
    if (ind1 == txt.length - 1) {
        txt = txt.substring(0, ind1);
        console.log(txt)
    }
    return txt
}
function createTextAnswerCache3(ek) {
    //svar med ^3 eller x\u00B3
    cache.ansX = ek.answers();


}

function createAnswerCache(ek) {
    cache.ansX = parseFloat(ek['x']).toFixed(3);
    cache.ansY = parseFloat(ek['y']).toFixed(3);


}
function slumpTal(nedreGrans, ovreGrans, nollOk = false) {
    var t = Math.floor(Math.random() * (ovreGrans + 1 - nedreGrans)) + nedreGrans;
    if (!nollOk) {
        while (t == 0) {
            t = Math.floor(Math.random() * (ovreGrans - nedreGrans)) + nedreGrans;
        }
    }
    return t;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    let tal = Math.floor(Math.random() * (max - min + 1)) + min;
    return tal === 0 ? 1 : tal; // undvik noll
}

function createTipsEq(tipsarray) {
    var el = document.getElementById("eqv-tipsrows");
    document.getElementById("textareaHelpMath").style.display = "block";
    var str = '<div    onclick="showTips(0)">Klick för  hjälp</div>';
    for (k = 0; k < tipsarray.length; k++) {
        str += '<div id="' + k + '" title="Klick för mer hjälp" style="display:none" onclick="showTips(' + (k + 1) + ')">' + tipsarray[k] + '</div>'
    }
    str += '<button id="' + k + '" class="showAnswerBtn" onclick="showAnswer()">Visa svaret</button>';
    el.innerHTML = str;


}
function showTips(num) {
    str = "" + num;
    console.log(str);
    document.getElementById(str).style.display = "block";
    showPoints();
}

function showPoints() {
    points = points - points * 0.25;
    document.getElementById("pointsIn").innerHTML = roundDecimalsZeros(points.toFixed(2));
}

function getLowestCommonMultiple(x, y) {

    return (x * y) / gcd(x, y);
}

function gcd(a, b) {
    return !b ? a : gcd(b, a % b)
}


function getEqvSystem(eqv1, eqv2) {
    return ' <div class="eqvsys"> <span class="bracket2line">{</span>' +

        '<div class="d-flex flex-column">  <span>' + eqv1 + '</span> <span>' +
        eqv2 + '</span > </div> </div>'
}
function setParentesBeforeNegative(num) {
    var txt = '' + num;
    if (num < 0) txt = '(' + num + ')';
    return txt;
}
function generateHeronianTriangle() {
    let a, b, c;
    let area;
    let found = false;

    for (let i = 1; i <= 100; i++) { // Eller någon lämplig gräns
        for (let j = i + 1; j <= 100; j++) {
            let k = Math.sqrt(i * i + j * j);
            if (Number.isInteger(k)) {
                a = i;
                b = j;
                c = k;
                area = (a * b) / 2;
                // Arean för en rätvinklig triangel

                if (Number.isInteger(area)) {
                    found = true;
                    break;
                }
            }
        }
        if (found) {
            break;
        }
    }
    return [a, b, c];
}
function taBortEttor(uttryck) {
    return uttryck
        .replace(/\b1(?=[a-zA-Z])/g, '')    // ersätt '1x' med 'x'
        .replace(/\b-1(?=[a-zA-Z])/g, '-'); // ersätt '-1x' med '-x'
}
function arSamma(rättSvar, elevSvar) {
    rättSvar = rättSvar
        .replace(/\s+/g, '')         // ta bort alla mellanslag
    elevSvar = elevSvar
        .replace(/\s+/g, '')         // ta bort alla mellanslag
    console.log(rättSvar, elevSvar)
    return rättSvar === elevSvar
}