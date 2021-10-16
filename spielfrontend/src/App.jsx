import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router';
import Login from './Components/Login';
import jwtDecode from 'jwt-decode';
import Register from './Components/Register';
import Home from './Components/Home';
import {Redirect} from 'react-router';


class App extends Component {
  state ={
    user:''

  }
  componentDidMount() {
    const jwt = localStorage.getItem('token');
    let refresh = localStorage.getItem('refresh');
    try{
        const user = jwtDecode(jwt);
        this.setState({user});
    }catch{

    }
}


  render() { 
     const user = this.state.user;  
         return(
            <div className = "App" >
            <h1>Spiel</h1>
            <Switch>
                <Route
                path ='/'
                exact
                render = {props => {
                    if (!user){
                        return <Redirect to ="/login"/>
                    }else{
                        return <Home {...props} user = {user} />
                    }
                }}
                />  
         <Route exact path="/home" component={Home}/>             
         <Route path= "/login" component={Login}/>
         <Route path="/register" component={Register}/>
      </Switch>

    </div>
    )
  }
}
 
export default App;