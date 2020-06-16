import React, {Component} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bookone from './Bookone';
import Home from './home'
import { photos } from "./photos";
import { photostwo } from "./photostwo";

export class Mainpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        photosone: photos,
        photostwo: photostwo
    };
  }

  render() {
    return (
      <div className="App" style={{padding:"50px"}}>
        <Switch>
              <Route path='/Home' component={()=><Home/>} />
              <Route exact path='/onebook' component={() => <Bookone photos={this.state.photosone}/>} />
              <Route exact path='/twobook' component={() => <Bookone photos={this.state.photostwo}/>}/>
              <Redirect to="/Home" />
        </Switch> 
      </div>
    );
  }
}
