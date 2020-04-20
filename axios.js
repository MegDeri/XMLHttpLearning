axios.get('https://pokeapi.co/api/v2/berry/cheri')
    .then(({ data }) => {
        console.log(data);
        for (let berry of data.flavors) {
            console.log(berry.flavor.name)
        }
        return axios.get(data.flavors[0].flavor.url)
    })
    .then(({ data }) => {
        console.log("This is the next data!!!!!!!!!!!!");
        for (let el of data.berries) {
            console.log(el.berry.name)
        }
    })
    .catch(err => {
        console.log(err)
    });