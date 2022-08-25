const baseUrl = import.meta.env.VITE_API_URL;

const api = async (method, path, data) => {
	try {
		const url = baseUrl + '/' + path;
		const _method = method.toUpperCase();
		const options = {
			method: _method, // *GET, POST, PUT, DELETE, etc.
			mode: 'cors', // no-cors, *cors, same-origin
			cache: 'no-store', // *default, no-cache, reload, force-cache, only-if-cached
			credentials: 'include', // include, *same-origin, omit
			headers: {
				'Content-Type': 'application/json',
			},
		}

		if (data) {
			options.body = JSON.stringify({text: 'Klaus', listId: '0'}) // body data type must match "Content-Type" header
		}

		const response = await fetch(url, options);

		return await response.json();
	}
	catch(error) {
		console.log(`response error: ${error}`);
		throw Error()
	}
};

export default api;
