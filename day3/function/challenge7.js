function obtenirHeureActuelle() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const secondes = date.getSeconds();
    return { heures, minutes, secondes };
}

console.log(obtenirHeureActuelle());
