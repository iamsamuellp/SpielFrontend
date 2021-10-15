import React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const CreateComment =(props) => {
  const [comment, setComment] = useState(['']);
  const [likes, setLikes] = useState([0]);
  const [dislikes, setDislikes] = useState([0]);


  const handleChange= (event)=>{
    setComment (event.target.value);
  }


  const handleSubmit = (event) => {
  let newComment = {comment:comment, likes:likes, dislikes:dislikes,}
  event.preventDefault()
  props.CreateComment(newComment)
  }

  return (
    <form onSubmit={handleSubmit} className="sumbitComment">
    <input className="input" name="comment" onChange={handleChange}placeholder="Comment"/>
    <button className ="createButton" type="submit">Create Comment</button>      
    </form>
  )
}
export default CreateComment;