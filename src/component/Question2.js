import React, { Component } from 'react';

const Question2 =({onInput2Change, onInput2aChange, onButton2Submit}) => {
	return (
		<div className='question'>
			<p className='f1'>
				{'Question 2'}
			</p>
			<p className='f3'>
				{'Insert an array and a target number. It will calculate the two first components that, when added together, give the target number'}
			</p>
			<div className=''>
				<div className='form center pa4 br3 shadow-5'>
					<label className="f5" for="array">"Array to order"</label>
					<input className="f4 pa2 w-30 center" type="tex" id="array" onChange={onInput2Change}/>
					<label className="f5" for="target">"Target Number"</label>
					<input className="f4 pa2 w-10 center" type="tex" id="target" onChange={onInput2aChange}/>
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-grey"
						onClick={onButton2Submit}
						>Detect</button>
					<input className="result f4 pa2 w-30 center bg-light-grey" type="tex" />
				</div>
			</div>
		</div>
		);
}

export default Question2;
