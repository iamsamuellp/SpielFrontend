import axios from 'axios';
import React, { Component } from 'react';



class Register extends Component {
    state ={
      firstName:'',
      lastName:'',
      userName:'',
      password:'',
      email:'',
    }
  
  handleChange=(event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
  // this is where is should mirror the rows in the table
   handleSubmit=(event)=>{
    let addUser={
    'firstName': this.state.firstName,
    'lastName': this.state.lastName,
    'username': this.state.userName,
    'password': this.state.password,
    'email': this.state.email,
   }
  // This is where a new user post to user table
     this.addNewUser(addUser)
  };

  async addNewUser(newUser){
    await axios.post(``,newUser).then(response => {alert("You are registered.")})

  }
  render() { 
    return( 
    <ul>
      <form className="form" onSubmit={this.handleSubmit} >
        <li><label>firstName</label></li>
        <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <li><label>firstName</label></li>
        <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <li><label>firstName</label></li>
        <input name="userName" onChange={this.handleChange} value={this.state.userName}/>
        <li><label>Password</label></li>
        <input name="password" onChange={this.handleChange} value={this.state.password}/>
        <li><label>Email</label></li>
        <input name="email" onChange={this.handleChange} value={this.state.email}/>
        <button type = "submit">Create account</button>
      
      </form>
    </ul>
    );
  }
}
 
export default Register 