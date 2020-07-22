import React, { useEffect } from 'react';
import './App.css';


const Squre = (props) => {
	return (
		<button className="square" onClick={() => props.onClick()}>
			<div>
				{props.value}
			</div>
		</button>
	)
}
export default Squre;