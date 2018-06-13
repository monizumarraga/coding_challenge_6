import React, { Component } from 'react';
import './App.css';
import Title from '../component/Title';
import Question1 from '../component/Question1';
import Question2 from '../component/Question2';
import Question3 from '../component/Question3';

class App extends Component {
  constructor (){
    super();
    this.state={
      input1: '',
      input2: '',
      input2a: '',
      input3: '',
      output1:'',
      output2:'',
      output3:'',
    }
  }

  onInput1Change =(event) =>{
    this.setState({input1:event.target.value});
  }
  onButton1Submit =() =>{
    this.setState({output1:this.state.input1});
  }

  onInput2Change =(event) =>{
    this.setState({input2:event.target.value});
  }
  onInput2aChange =(event) =>{
    this.setState({input2a:event.target.value});
  }
  onButton2Submit =() =>{
    this.setState({output2:this.state.input2});
  }

  onInput3Change =(event) =>{
    this.setState({input3:event.target.value});
  }
  onButton3Submit =() =>{
    this.setState({output3:this.state.input3});
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Question1 
          onInput1Change={this.onInput1Change}
          onButton1Submit={this.onButton1Submit}
          />
        <Question2 
          onInput2Change={this.onInput2Change}
          onInput2aChange={this.onInput2aChange}
          onButton2Submit={this.onButton2Submit}
          />
        <Question3 
          onInput3Change={this.onInput3Change}
          onButton3Submit={this.onButton3Submit}
          />
      </div>
    );
  }
}

export default App;
