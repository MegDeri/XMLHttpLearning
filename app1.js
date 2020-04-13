var url = 'https://pokeapi.co/';


var xhr = new XMLHttpRequest();


xhr.addEventListener("load", function () {

    console.log(this.responseText);

});

xhr.open("GET", url);


xhr.send(data);