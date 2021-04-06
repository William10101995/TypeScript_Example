function contarPalabras(cadena: string) {
  const lim = cadena.replace(/[?,]/g, "");
  const arreglo: string[] = lim.split(" ");
  const dic: { [key: string]: number } = {};

  arreglo.forEach((e) => {
    if (e in dic) {
      dic[e] = dic[e] + 1;
    } else {
      dic[e] = 1;
    }
  });
  console.log(dic);
}

contarPalabras("Hola, como estas?");

