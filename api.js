
const btn = document.querySelector("button");
const divAmi = document.getElementById("ami");
btn.addEventListener("click", function(){
    let prenom;
    fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        return data;
    })

    .then(data => {
        const img = data.results[0].picture.large;
        divAmi.innerHTML += `<img src="${img}" />`;

        prenom = data.results[0].name.first;
        const nom = data.results[0].name.last;
        divAmi.innerHTML += `<p>${prenom} ${nom}</p>`;

        const opt = {
            headers :{
                'X-API-KEY': '10490408c0faed2fe357848d5471232a',
            },
        };
        fetch(`https://v2.namsor.com/NamSorAPIv2/api2/json/origin/${prenom}/${nom}`, opt)
        .then(res => res.json())
            .then(data => {
                console.log(data);
                return data;
            })
        .then(data => {
            const infos = data.regionOrigin;
            divAmi.innerHTML += `<p>Provenance : ${infos}</p>` 
        })
    });
});




