import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import Login from './Components/Login';
import jwtDecode from 'jwt-decode';
import Register from './Components/Register';
import Home from './Components/Home';
import {Redirect} from 'react-router';
import NavBar from './Components/Navbar';
import StoryForm from './Components/StoryForm';
import Logout from './Components/Logout';
import StoryList from './Components/StoryList';
 // Added this :boom:

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
        this.getCurrentUser(user)
    }catch{

    }
}

  

  render() { 
     const user = this.state.user;  
         return(
            <div className = "App" >
              <NavBar className= "navbar" user ={user}/>
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
         <Route path="/storyform"component={StoryForm}/>
         <Route path="/logout"component={Logout}/>
         <Route path="/home" component={Home}/>
         <Route path="/storylist" component={StoryList} />
      </Switch>

    </div>
    )
  }
}
 
export default App;