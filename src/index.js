const root = document.querySelector('#root');
const link = document.getSelection('a');

window.onload = async () => {
	const { hash } = window.location;

	if (hash === '#season') {
		const season_result = await season();
		root.innerHTML = `<ul>${season_result
			.map((race) => `<li class="race">${race.raceName}</li>`)
			.join(' ')}</ul>`;
	} else if (hash === '#drivers') {
		const drivers_result = await drivers();
		root.innerHTML = `<ul>${drivers_result
			.map((driver) => `<li class="driver">${driver.code}</li>`)
			.join(' ')}</ul>`;
	} else if (hash === '#constructors') {
		const constructors_result = await constructors();
		root.innerHTML = `<ul>${constructors_result
			.map((constructor) => `<li class="constructor">${constructor.name}</li>`)
			.join(' ')}</ul>`;
	} else {
		root.innerHTML =
			'<h1>Herzlich Willkommen!</h1> <h2>Danke, dass du die App benutzt</h2>';
	}
};

window.onhashchange = async () => {
	const { hash } = window.location;

	switch (hash) {
		case '#season':
			const season_result = await season();
			root.innerHTML = `<ul>${season_result
				.map((race) => `<li class="race">${race.raceName}</li>`)
				.join(' ')}</ul>`;
			break;
		case '#drivers':
			const drivers_result = await drivers();
			root.innerHTML = `<ul>${drivers_result
				.map(
					(driver) =>
						'<li class="driver">' +
						` ${driver.permanentNumber} ${driver.code} ${driver.givenName} ${driver.familyName}</li>`
				)
				.join(' ')}</ul>`;
			break;
		case '#constructors':
			const constructors_result = await constructors();
			root.innerHTML = `<ul>${constructors_result
				.map(
					(constructor) => `<li class="constructor">${constructor.name}</li>`
				)
				.join(' ')}</ul>`;
			break;
		default:
			root.innerHTML = 'default';
	}
};
