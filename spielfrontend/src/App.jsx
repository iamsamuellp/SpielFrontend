import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route } from 'react-router';
import Login from './Components/Login';


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
       <Switch>
         <Route path= "Login" component={Login}/>
       </Switch>

    </div>
    )
  }
}
 
export default App;