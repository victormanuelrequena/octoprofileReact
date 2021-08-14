export default function helpRest (url) {

	const get = (url) => {
		return fetch(url)
		.then(res => {
			return res.json()
		})
		.then(data =>  { return data })
	};

	return { get }
};