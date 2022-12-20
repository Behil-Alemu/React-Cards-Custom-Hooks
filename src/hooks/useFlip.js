import  { useState } from 'react';
const useFlip = (initialState = false) => {
	const [ state, setState ] = useState(initialState);
	const toggleState = () => {
		setState((state) => !state);
	};
	return [ state, toggleState ];
};
export default useFlip;
