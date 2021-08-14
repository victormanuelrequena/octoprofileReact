function getTopStars(repos = [], index) {
	const allStars = repos.map(repo => repo.stargazers_count);
	const listStars = [];

	function getTopStarsSort(a, b) {
		return a - b;
	};

	allStars.sort(getTopStarsSort);

	for( let i = index; i > 0; i-- ) {
		listStars.push(allStars[allStars.length - i]);
	};

	return listStars;
	};

export default getTopStars;