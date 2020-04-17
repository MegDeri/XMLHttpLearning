
fetch('https://pokeapi.co/api/v2/berry/cheri')
    .then((response) => {
        if (!response.ok)
            throw new Error(`Error!!!!!!!! It is not status 200 is: ${response.status}`);

        response.json().then(data => {
            for (let elem of data.flavors) {
                console.log(elem.flavor.name);
            }
        });

    })
    .catch(err => {
        console.log('Something went wrong!');
        console.log(err);
    })