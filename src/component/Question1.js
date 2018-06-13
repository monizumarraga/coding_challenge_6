import React, { Component } from 'react';
import './Question1.css';

const Question1 =({onInput1Change, onButton1Submit}) => {
	return (
		<div className='question center'>
			<p className='f1'>
				{'Question 1'}
			</p>
			<p className='f3'>
				{'Insert an array and it will be reordered'}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<label className="f5" for="array">"Array to order"</label>
					<input className="f4 pa2 w-40 center" type="tex" id="array" required onChange={onInput1Change}/>
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-grey" id="question1" 
						onClick={onButton1Submit}
						>Detect</button>
					<input className="result f4 pa2 w-30 center bg-light-grey" type="tex" value={onButton1Submit}/>
				</div>
			</div>
		</div>
		);
}

export default Question1;
