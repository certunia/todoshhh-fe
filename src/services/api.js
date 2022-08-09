import axios from "axios";

const api = axios.create();

api.defaults.baseURL = process.env.API_URL;
api.defaults.withCredentials = true;
api.defaults.credentials = 'include';

// interceptor to catch errors
const errorInterceptor = error => {
	// window.alert('Server error...')

	// switch(error.response.status) {
	// 	case 400:
	// 		console.log('error 400');
	// 		break;
	//
	// 	default:
	// 		console.log('server error');
	// 		break;
	// }

	return Promise.reject(error);
}

// Interceptor for responses
const responseInterceptor = response => {
	switch(response.status) {
		case 200:
			// yay!
			break;
		// any other cases
		default:
		// default case
	}

	return response;
}

api.interceptors.response.use(responseInterceptor, errorInterceptor);

export default api;
