const season = async () => {
	let final = await fetch('http://ergast.com/api/f1/current.json')
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
	return final.MRData.RaceTable.Races;
};

const drivers = async () => {
	let final = await fetch('http://ergast.com/api/f1/current/drivers.json')
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
	return final.MRData.DriverTable.Drivers;
};

const constructors = async () => {
	let final = await fetch('http://ergast.com/api/f1/current/constructors.json')
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
	return final.MRData.ConstructorTable.Constructors;
};
