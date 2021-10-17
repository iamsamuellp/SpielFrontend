import React, { Component } from 'react';
import axios from 'axios';



class StoryForm extends Component {
    state = { 
      title:'',
      author:'',
      story:'',
      genre:'',
      story_type:'',
     }
     handleChange=(event) =>{
      this.setState ({
        [event.target.name]: event.target.value,
      });
    };
  
    handleChangeOne=(event) =>{
      this.setState ({
        [event.target.name]: parseInt(event.target.value),
      });
    };
    //once the form is submitted, an object is created. The values on the left should match the name of the rows in the table
  handleSubmit=(event)=>{
    event.preventDefault();
    let newStory= {
      Title:this.state.title,
      author:this.state.author,
      story:this.state.story,
      genres:this.state.genres,
      story_type:this.state.storytype
    }
// The object we created is then passed into a function where we post the new user to the user table
    this.addNewStory(newStory)
  }
  async addNewProduct(anew){
    await axios.post(`http://127.0.0.1:8000/api/story/new/`,anew).then(response => {alert("Story Submiited")})
  }
  
  render() { 
    return ( 
      <div> 
        <h1>Tell us a Tale</h1>
        <form className= "storyform" onSubmit={(event) => this.handleSubmit (event)}>
          <ul>
        <li><label>Story</label></li>
        <input name= "title" onChange={this.handleChange} value={this.state.title}/>
        <li><label>Author</label></li>
        <input name= "author" onChange={this.handleChange} value={this.state.author}/>
        <li><label>genre</label></li>
        <input name= "genre" onChange={this.handleChange} value={this.state.genre}/>
        <li><label>StoryType</label></li>
        <input name= "storytype" onChange={this.handleChange} value={this.state.storytype}/>
        <form action="/action_page.php">
        <div class="mb-3 mt-3">
      <label>Story:</label>
      <textarea class="form-control" rows="5" id="comment" name="text" name= "story" onChange={this.handleChange} value={this.state.story}></textarea>
    </div>
    <li><label>genre</label></li>
        <input name= "genre" onChange={this.handleChange} value={this.state.genre}/>
        <li><label>StoryType</label></li>
        <input name= "storytype" onChange={this.handleChange} value={this.state.storytype}/>
  </form>
      <button type="submit" class="btn btn-primary">Submit</button>
        </ul>
        </form>        
      </div>
     );
  }
}
export default StoryForm;