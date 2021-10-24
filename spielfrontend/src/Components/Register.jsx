import axios from 'axios';
import React, { Component } from 'react';




class Register extends Component {
    state ={
      first_name:'',
      last_name:'',
      username:'',
      password:'',
      email:'',
      favorite_genre:'',
      favorite_type:'',
      is_employee:false,
    }
  
  handleChange=(event) =>{
    this.setState({
      [event.target.name]: event.target.value, isemployee:true
    });
  };
  
  
  handleCheckbox = (event) => {
    this.setState({
      isemployee: !this.state.is_employee
    },function(){
      console.log(this.state.is_employee)
    })
  }
 
   handleSubmit=(event)=>{
     event.preventDefault()
    let user={
    first_name: this.state.first_name,
    last_name: this.state.last_name,
    username: this.state.username,
    password: this.state.password,
    email: this.state.email,
    is_employee:this.state.is_employee,
    favorite_genre:this.state.favorite_genre,
    favorite_type:this.state.favorite_type
    
   }
    console.log(user)
     this.addNewUser(user)
  };

  async addNewUser(newUser){
    try{
      let response = await axios.post("http://127.0.0.1:8000/api/auth/register/", newUser)
      console.log(response);
      // window.location = '/login'
      console.log(newUser)
    }catch{
      console.log("Error in Registration");
    }
  };
  render() { 
    return( 
      <div class= "card w-75 ">
    <ul>
      
    <form onSubmit={(event) => this.handleSubmit(event)}>
              <h3>Sign Up</h3>
              <div className="form-group">
                  <label>Username</label>
                  <input type="text" name="username" className="form-control" placeholder="Username" onChange={this.handleChange} value={this.state.username} />
              </div>
              <div className="form-group">
                  <label>Password</label>
                  <input type="text" name="password" className="form-control" placeholder="Password" onChange={this.handleChange} value={this.state.password}/>
              </div>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" name="first_name" className="form-control" placeholder="First name" onChange={this.handleChange} value={this.state.first_name} />
              </div>
              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" name="last_name" className="form-control" placeholder="Last name" onChange={this.handleChange} value={this.state.last_name}/>
              </div>
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} value={this.state.email}/>
              </div>
              <div className="form-group">
                  <label>Favorite Genre </label>
                  <input type="text" name="favorite_genre" className="form-control" placeholder="Enter favorite genre" onChange={this.handleChange} value={this.state.favorite_genre}/>
              </div>
              <div className="form-group">
                  <label>Favorite Type </label>
                  <input type="text" name="favorite_type" className="form-control" placeholder="Enter favorite type" onChange={this.handleChange} value={this.state.favorite_type}/>
              </div>
              <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">is Employee</label>
                  <input type="checkbox" className="form-check-input" name='is_employee' id="flexCheckDefault" onChange={this.handleCheckbox} value={this.state.is_employee}/>
              </div>

              <button type="submit" className="btn btn-dark">Sign Up</button>
              <p className="forgot-password text-right">
                  Already registered <a href="/Login">sign in?</a>
              </p>
      </form>

    </ul>
    </div>
    );
  }
}
 
export default Register 