import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DisplayComments=(props) => {
  const[comments,setComments]=useState(['no Comments'])
  const[comm,setComm]=useState([])
  const[reply,setReply]=useState([''])
  const[replies,setreplies]=useState([''])

  async function getComments(story){
    await axios.get(`http://127.0.0.1:8000/api/comment/all/${story}`).then(response => {setComments(response.data)})
    console.log(comments)
  }

  const increment = (val)=>{

    let commentUpdate = {
        
                id: val.id,
                video: val.video,
                comment: val.comment,
                likes: (val.likes=+1),
                dislikes: val.dislikes
            }
            
          }
  


  useEffect(()=>{
    getComments(props.story.id)
},[props,comments])

 return(
   <div>
     {comments.map((element)=><><p>{element.body}</p></>)}
   </div>
 )


}
export default DisplayComments


