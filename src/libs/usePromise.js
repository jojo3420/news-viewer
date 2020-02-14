import { useState, useEffect } from 'react';
// import produce from 'immer';
// import axios from 'axios';

function usePromise(promiseCreator, deps) {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [response, setResponse] = useState(null);

	useEffect(() => {
		const process = async () => {
			setLoading(true);
			try {
				const response = await promiseCreator();
				setResponse(response);
			} catch (e) {
				setError(e.toString());
			}
			setLoading(false);
		};
		process();
	}, deps);

	return [loading, error, response];
}

export default usePromise;
