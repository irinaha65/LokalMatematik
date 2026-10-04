/**
 * Genererar alla bråk som är mindre än 1
 * och som börjar med decNum
 * och ökar med decNum
 * @param {decimal iterator} decNum 
 * @param {decimal slump} slump - randomtal
 */
function genAllFrac(decNum, max_a, max_b) {
    let decs = [];

    let dec = decNum;
    let deg = 1 / decNum;
    while (dec < 1) {
        var frac = new Fraction(dec);
        if (frac.n <= max_a && frac.d <= max_b) {
            if (frac.n != 0 && frac.d != deg && frac.d != 1 && !(decNum < 0.01 && frac.d == deg / 2)) {
                let num = {
                    dec: frac.n / frac.d, a: frac.n, b: frac.d, b_10: deg,

                }
                console.log(num);
                decs.push(num);
            }
        }

        dec += decNum;
    }

    return decs;
}
function getRandomFrac(decNum, max_a = 20, max_b = 50) {
    let decs = genAllFrac(decNum, max_a, max_b);

    let slump = Math.floor(Math.random() * decs.length);

    //localStorage.setItem("decimals", JSON.stringify(decs));
    console.log("random decimals: ", decs[slump]);
    let dec = decs[slump];


    return dec

}