setTimeout(() => console.log("coucou les web20"), 2000);
setTimeout(() => console.log("coucou à toi même"), 2500);
//intéraction où l'on a prévu le timing pr que l'un passe d'abord et l'autre passe après
//l'écart est de 5 secondes entre les deux
//MAIS si gros délai avec un de deux, le timing est perturbé

setTimeout(() => {
    console.log("coucou les web");
    setTimeout(() => {
        console.log("coucou à toi");
    }, 5000)
}, 2000);

