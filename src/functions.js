const fetchApi = async (url) => {
	let final = await fetch(url)
		.then((response) => {
			if (response.ok) {
				return response.json();
			}
			throw response;
		})
		.catch((error) => {
			console.error('Es ist ein fehler aufgetreten... ', error);
		});

	console.log(final);
	return final;
};

const season = async () => {
	const result = await fetchApi('http://ergast.com/api/f1/current.json');
	return result.MRData.RaceTable.Races;
};

const drivers = async () => {
	const result = await fetchApi(
		'http://ergast.com/api/f1/current/drivers.json'
	);
	return result.MRData.DriverTable.Drivers;
};

const constructors = async () => {
	const result = await fetchApi(
		'http://ergast.com/api/f1/current/constructors.json'
	);
	return result.MRData.ConstructorTable.Constructors;
};
