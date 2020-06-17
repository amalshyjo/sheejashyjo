import React, {Component} from 'react';
import { HashRouter } from 'react-router-dom';
import './App.css'
import { Mainpage } from './components/Mainpage' 
import Navbarhdr from './navbar'

class App extends Component {
  render() {
    return (
      <HashRouter>
            <Navbarhdr/>
        <div className="App">
          <Mainpage/>
        </div>
      </HashRouter>
    );
  }
}
export default App;