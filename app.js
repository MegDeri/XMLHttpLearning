

const firstReq = new XMLHttpRequest();


firstReq.addEventListener('load', function () {
	console.log('FIRST REQUEST WORKED!!!');
	const data = JSON.parse(this.responseText);
	const filmURL = data.flavors[0].flavor.url;
	console.log(filmURL)
	const filmReq = new XMLHttpRequest();
	filmReq.addEventListener('load', function () {
		console.log('SECOND REQUEST WORKED!!!');
		console.log(this);
		// const filmData = JSON.parse(this.responseText);
		// console.log(filmData.berries);
	});
	filmReq.addEventListener('error', function (e) {
		console.log('ERROR!!', e);
	});
	filmReq.open('GET', filmURL);
	filmReq.send();
});
firstReq.addEventListener('error', (e) => {
	console.log('ERROR!!!!!!');
});
firstReq.open('GET', 'https://pokeapi.co/api/v2/berry/cheri');
firstReq.send();
console.log('Request Sent!');
