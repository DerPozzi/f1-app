const root = document.querySelector('#root');
const link = document.getSelection('a');

root.innerHTML = window.location.hash;

window.onhashchange = () => {
	let hash = window.location.hash;

	switch (hash) {
		case '#season':
			root.innerHTML = 'cüs';
			break;
		case '#drivers':
			root.innerHTML = 'üsc';
			break;
		case '#constructors':
			root.innerHTML = 'scü';
			break;
		default:
			root.innerHTML = 'default';
	}
};
