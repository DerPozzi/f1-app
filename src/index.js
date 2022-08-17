const root = document.querySelector('#root');
const link = document.getSelection('a');

window.onload = async () => {
	let hash = window.location.hash;

	if (hash === '#season') {
		let season_result = await season();
		root.innerHTML =
			'<ul>' +
			season_result
				.map((race) => {
					return '<li class="race">' + race.raceName + '</li>';
				})
				.join(' ') +
			'</ul>';
	} else if (hash === '#drivers') {
		let drivers_result = await drivers();
		root.innerHTML =
			'<ul>' +
			drivers_result
				.map((driver) => {
					return '<li class="driver">' + driver.code + '</li>';
				})
				.join(' ') +
			'</ul>';
	} else if (hash === '#constructors') {
		let constructors_result = await constructors();
		root.innerHTML =
			'<ul>' +
			constructors_result
				.map((constructor) => {
					return '<li class="constructor">' + constructor.name + '</li>';
				})
				.join(' ') +
			'</ul>';
	} else {
		root.innerHTML =
			'<h1>Herzlich Willkommen!</h1> <h2>Danke, dass du die App benutzt</h2>';
	}
};

window.onhashchange = async () => {
	let hash = window.location.hash;

	switch (hash) {
		case '#season':
			let season_result = await season();
			root.innerHTML =
				'<ul>' +
				season_result
					.map((race) => {
						return '<li class="race">' + race.raceName + '</li>';
					})
					.join(' ') +
				'</ul>';
			break;
		case '#drivers':
			let drivers_result = await drivers();
			root.innerHTML =
				'<ul>' +
				drivers_result
					.map((driver) => {
						return '<li class="driver">' + driver.code + '</li>';
					})
					.join(' ') +
				'</ul>';
			break;
		case '#constructors':
			let constructors_result = await constructors();
			root.innerHTML =
				'<ul>' +
				constructors_result
					.map((constructor) => {
						return '<li class="constructor">' + constructor.name + '</li>';
					})
					.join(' ') +
				'</ul>';
			break;
		default:
			root.innerHTML = 'default';
	}
};
