import React, { Component } from 'react';
import './App.css';
import SimpleCard from './Card';
import MuiThemeProvider from 'material-ui/core/styles/MuiThemeProvider'; // add
import { getJson } from './Api';

class App extends Component {
  state = {JSON:[]};

  componentWillMount() {
      const _this = this;
      getJson().then(function(response){
        _this.setState({ JSON: response })
      }
    );
  }
  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <p className="App-intro">
            <h1 className="App-title">Doggo.io</h1>
        </p>
        <div className="container">
            { this.state.JSON.map(function (entry, i){
              return <SimpleCard data={entry} key={i}></SimpleCard>
            })}
        </div>
      </div>

      </MuiThemeProvider>
    );
  }
}

export default App;
