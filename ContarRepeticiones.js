function contarPalabras(cadena) {
    var lim = cadena.replace(/[?,]/g, "");
    var arreglo = lim.split(" ");
    var dic = {};
    arreglo.forEach(function (e) {
        if (e in dic) {
            dic[e] = dic[e] + 1;
        }
        else {
            dic[e] = 1;
        }
    });
    console.log(dic);
}
contarPalabras("Hola, como estas, Hola como te sentis?");
