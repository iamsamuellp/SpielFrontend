
import { Link } from "react-router-dom";
import "bootswatch/dist/lux/bootstrap.min.css";
import React from "react";
import Logout from "./Logout";
import { useState, useEffect } from "react";
import axios from "axios";
import Login from "./Login";






const NavBar = ({user,currentUser}) => {


 

  return ( 
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
  <div class="container-fluid">
  <Link className="navbar-brand" to={"/Home"}>Spiel</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon me-auto" padding-right="1 rem"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarColor">
      <ul class="navbar-nav ml-auto ">
      {!currentUser&&
          <React.Fragment> 
        <li className="nav-item">
        <Link to ='/FavoriteGenre'><a className="nav-link">FavoriteGenre</a></Link>
        </li>
        <li className="nav-item">
        <Link to ='/favoriteStoryType'><a className="nav-link">My Favorite Story Type</a></Link>
        </li>
        <li className="nav-item">
        <Link to ='/register'><a class="nav-link">Register</a></Link>
        </li>
        <li className="nav-item">
        <Link to ='/storyform'><a class="nav-link">StorySubmission</a></Link>
        </li>
        <li className="nav-item">
        <Link to ='/storytable'><a class="nav-link">StoryTable</a></Link>
        </li>
        <li className = "nav-item"><Logout/></li>
        </React.Fragment>
        }
      {!user&&
      <div>
        
      </div>
      }
      </ul>
    </div>
  </div>
</nav>
   );
}

export default NavBar;