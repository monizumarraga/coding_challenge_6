import React, { Component } from 'react';

const Question3 =({onInput3Change, onButton3Submit}) => {
	return (
		<div className='question'>
			<p className='f1'>
				{'Question 3'}
			</p>
			<p className='f3'>
				{'Enter an RGB or Hexadecimal color number and it will calculate the Hexadecimal or RGB corresponding one'}
			</p>
			<div className=''>
				<div className='form center pa4 br3 shadow-5'>
					<label className="f5" for="color">"Color number"</label>
					<input className="f4 pa2 w-40 center" type="tex" id="color" onChange={onInput3Change}/>
					<button className="w-30 grow f4 link ph3 pv2 dib white bg-light-grey"
						onClick={onButton3Submit}
						>Detect</button>
					<input className="result f4 pa2 w-30 center bg-light-grey" type="tex" />
				</div>
			</div>
		</div>
		);
}

export default Question3;
