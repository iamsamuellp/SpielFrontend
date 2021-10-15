import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayComments=(props) => {
  const[comments,setComments]=useState(['no Comments'])
  const[comm,setComm]=useState([])
  const[reply,setReply]=useState([''])
  const[replies,setreplies]=useState([''])

  async function filterComment(story){
    await axios.get(`http`)
  }


  async function updateComment(comment){
    await axios.put(`http://127.0.0.1:/api/comment/new/${comment}`).then(response=>{setComments(response.data)})
    console.log(comments)
  }



}
export default DisplayComments


