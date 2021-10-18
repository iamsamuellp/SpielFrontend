import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Route} from'react';
import {Redirect} from "react-router"
import {useState, useEffect} from 'react';



class Register extends Component {
    state ={
      firstname:'',
      lastName:'',
      userName:'',
      password:'',
      email:'',
      favorite_genre:'',
      favorite_type:'',
      isemployee:false,
    }
  
  handleChange=(event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
 
   handleSubmit=(event)=>{
     event.preventDefault()
    let addUser={
    'firstname': this.state.firstname,
    'lastName': this.state.lastName,
    'username': this.state.userName,
    'password': this.state.password,
    'email': this.state.email,
    'favoriteGenre':this.state.favoriteGenre,
    'favoriteType':this.state.favoriteType,
    'is_employee':this.state.isemployee
   }

     this.addNewUser(addUser)
  };

  async addNewUser(newUser){
    try{
      let response = await axios.post("http://127.0.0.1:8000/api/auth/register/",newUser)
      console.log(response);
      window.location = '/login'
      console.log(newUser)
    }catch{
      console.log("Error in Registration");
    }
  };
  render() { 
    return( 
      <div class= "card w-75 ">
    <ul>
      
      <form className="form" onSubmit={(event) =>this.handleSubmit (event)} >
        <li><label>Firstname</label></li>
        <input name="firstName" onChange={this.handleChange} value={this.state.firstName}/>
        <li><label>LastName</label></li>
        <input name="lastName" onChange={this.handleChange} value={this.state.lastName}/>
        <li><label>Username</label></li>
        <input name="userName" onChange={this.handleChange} value={this.state.userName}/>
        <li><label>Password</label></li>
        <input name="password" onChange={this.handleChange} value={this.state.password}/>
        <li><label>Email</label></li>
        <input name="email" onChange={this.handleChange} value={this.state.email}/>
        <li><label>Favoritegenre</label></li>
        <input name="favoriteGenre" onChange={this.handleChange} value={this.state.favoriteGenre}/>
        <li><label>favoriteStoryType</label></li>
        <input name="favoriteType" onChange={this.handleChange} value={this.state.favoriteType}/>



        <button type = "submit">Create account</button>
      
      </form>

    </ul>
    </div>
    );
  }
}
 
export default Register 