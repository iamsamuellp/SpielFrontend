
import { Link } from "react-router-dom";
import React from "react";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";





const NavBar = ({user}) => {
  const [currentUser,setCurrentUser] = useState('')

  useEffect(()=>{
    getCurrentUser()
  },[user])

  async function getCurrentUser(){
    try{
    const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/auth/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setCurrentUser(response.data)})
    }catch{
      const refreshtoken = localStorage.getItem('refresh');
      let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh/`, {refresh: refreshtoken})
      localStorage.setItem('token', refreshResponse.data.access)
      const jwt =localStorage.getItem('token');
    await axios.get(`http://127.0.0.1:8000/api/auth/${user.user_id}/`, { headers: {Authorization: 'Bearer ' + jwt}}).then(response => {setCurrentUser(response.data)})
    }
  }

  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
    <a class="navbar-brand" >Spiel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon me-auto" padding-right="1 rem"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor01">
      <ul class="navbar-nav ml-auto ">
      {!currentUser.user &&
          <React.Fragment>
        <li class="nav-item">
        <Link to ='/home'><a class="nav-link active">Home
            <span class="visually-hidden">(current)</span>
          </a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/favoriteGenre'><a class="nav-link">FavoriteGenre</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/favoriteStoryType'><a class="nav-link">My Favorite Story Type</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/register'><a class="nav-link">Register</a></Link>
        </li>
        <li class="nav-item">
        <Link to ='/storyform'><a class="nav-link">StorySubmission</a></Link>
        </li>
        <li class = "nav-item"><Logout/></li>
        </React.Fragment>
        }
      </ul>
    </div>
  </div>
</nav>
   );
}

export default NavBar;