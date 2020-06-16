import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Mainpage } from './components/Mainpage' 
import Navbarhdr from './navbar'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
            <Navbarhdr/>
        <div className="App">
          <Mainpage/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;