import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
	// const [greeting, setGreeting] = useState('Venus')
	const message = useSelector((state) => state.message);
 const dispatch = useDispatch()
	return (
		<>
			<h1>Hello {message}</h1>
      <button
      onClick={() => dispatch({type: 'CHANGE_GREETING', payload: 'Uranus'})}>
        Say hi to Uranus
      </button>
		</>
	);
};

export default App;
