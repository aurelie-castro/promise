const getUser = (user) =>{
    return fetch(`https://api.github.com/users/${user}`).then(res => res.json());
}

getUser('aurelie-castro').then((data) =>{
    console.log(data);
    return getUser('fwastelin');
}).then((data) => console.log(data));