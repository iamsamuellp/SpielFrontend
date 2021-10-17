import React from 'react';
import { Link, link } from 'react-router-dom';
import { useState } from 'react';



function Story(props){
  const [story,setStory] = useState([''])

  return(
    <div class="container">
      <div class="row">
        <div class="col-md-offset-1 col-md-9"></div>
      {props.location.state.story.map((element) =>
      <>
      <h3>Title: {element.title}</h3>
      <h2>Author: {element.author}</h2>
      <h5>Story: {element.story}</h5>
      <Link to ={{pathname: '/home'}}>Back to Home</Link>

      </>)}  
      </div>
    </div>
  )

}

export default Story