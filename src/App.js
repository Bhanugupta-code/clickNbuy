import React, { Component } from 'react';
import Holder from './clickNbuy/Holder'
import { Login, Register } from './clickNbuy/Login_Logout'


export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isregister: true,
      istoggle: false,
      name: null,
      password: null,
    }
  };
  registrationHandler = (event) => {
    console.log(event.target.name);
    this.setState({ isregister: true });
  };
  toggleHa = (event) => {
    console.log(event);
    this.setState({ istoggle: !this.state.istoggle });
  }

  render() {
    return (
      <div>
        {this.state.isregister ?
          (<Holder />) :
          (this.state.istoggle ? (<Login toggle={this.toggleHa} submit={this.registrationHandler} />) : <Register submit={this.registrationHandler} toggle={this.toggleHa} />)}

      </div>
    )
  }
}

export default App;