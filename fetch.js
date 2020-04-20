
const checkStatusAndParse = (response) => {
    if (!response.ok)
        throw new Error(`Error!!!!!!!! It is not status 200 is: ${response.status}`);
    return response.json()
}

const printBerries = (data) => {
    console.log("Loaded more berries..............");
    for (let berry of data.flavors) {
        console.log(berry.flavor.name)
    }
    return Promise.resolve(data.flavors[0].flavor.url)
}

const fetchNextUrl = (url) => {
    return fetch(url);
}

const nextPrint = (data) => {
    console.log("This is the next data!!!!!!!!!!!!");
    for (let el of data.berries) {
        console.log(el.berry.name)
    }
    //console.log(data.berries)
}


fetch('https://pokeapi.co/api/v2/berry/cheri')
    .then(checkStatusAndParse)
    .then(printBerries)
    .then(fetchNextUrl)
    .then(checkStatusAndParse)
    .then(nextPrint)
    .catch(err => {
        console.log('Something went wrong!');
        console.log(err);
    })