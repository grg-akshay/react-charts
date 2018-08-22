import React, { Component } from 'react';
import './App.css';
// import Charts from './components/Charts/Charts';
import ChartWrapper from './components/ChartWrapper/ChartWrapper';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
   
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Charts</h1>
        </header>
        <br/>
        
        <ChartWrapper />
      </div>
    );
  }
}

export default App;
