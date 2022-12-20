import { useState } from 'react';
import axios from 'axios';
import uuid from 'uuid';

const useAxios = (url, options = {}) => {
	const [ cards, setCards ] = useState([]);
	const [ error, setError ] = useState(null);

	// after the first render, fetch our data

	const fetchData = async () => {
		try {
			const res = await axios.get(url);
			setCards((cards) => [ ...cards, { ...res.data, id: uuid() } ]);
		} catch (error) {
			setError(error);
		}
	};

	return { cards, error, fetchData };
};

export default useAxios;
