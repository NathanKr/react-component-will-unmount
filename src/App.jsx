import './App.css'
import  { Component } from 'react';
import CountSec from './CountSec'

class App extends Component {
  state = {show : true}
   
  render() {
    const elem = this.state.show ? <CountSec/> : '';
    return (
      <div className="App">
        <button onClick={()=> this.setState({show : false})} >Hide</button>
        {elem}
      </div>
    );
  }
}


export default App
