import React from 'react';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const CreateComment =(props) => {
  const [comment, setComment] = useState(['']);
  const [story, setStory] = useState();
  const [likes, setLikes] = useState([0]);
  const [dislikes, setDislikes] = useState([0]);

  useEffect(() =>{
    setStory(props.story)
  },[props]);

  

  const handleChange= (event)=>{
    setComment (event.target.value);
  }


  const handleSubmit = (event) => {
    event.preventDefault()
    let newComment = {comment:comment, likes:likes, dislikes:dislikes,storyId:story}
  }
    addNewComment(newComment)

  async function addNewComment(newComment){
    await axios.post(`http://127.0.0.1:8000/api/comment/new/`,newComment);
  }

  return (
    <React.Fragment>
    <form onSubmit={handleSubmit} className="sumbitComment">
    <label> Leave a Comment </label>  
    <input className="input" name="comment" onChange={handleChange}placeholder="Comment"/>
    <button className ="createButton" type="submit">Create Comment</button>      
    </form>
    </React.Fragment>
  )
}
export default CreateComment;