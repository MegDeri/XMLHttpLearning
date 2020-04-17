
fetch('https://pokeapi.co/api/v2/berry/cheri')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Error!!!!!!!! It is not status 200 is: ${response.status}`);

        return response.json()

    })
    .then(data => {
        const flavUrl = data.flavors[0].flavor.url;
        return fetch(flavUrl);
    })
    .then((response) => {
        if (!response.ok)
            throw new Error(`Error!!!!!!!! It is not status 200 is: ${response.status}`);

        return response.json()

    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log('Something went wrong!');
        console.log(err);
    })