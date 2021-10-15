import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Login from './Components/Login';
import jwtDecode from 'jwt-decode';


class App extends Component {
  state ={
    user:''

  }
  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwtDecode(jwt);
        this.setState({user});
    }catch{

    }
}


  render() { 
    return(
     <div className = "App" >
       <h1>Spiel</h1>
       
         <Route path= "Login" component={Login}/>
      

    </div>
    )
  }
}
 
export default App;