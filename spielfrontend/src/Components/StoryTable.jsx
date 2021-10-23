import React, {Component} from 'react';
import axios from "axios";
import { Route, Router } from 'react-router';
import { Link } from 'react-router-dom';
import jwtDecode from 'jwt-decode';



class StoryTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      story:[],
      serach: '',
      user:''
     }
  }
   
  componentDidMount(){
    this.getStory()
    this.getUser(localStorage)
  }

  async getUser(localStorage){
    const jwt = localStorage.getItem('token');
    try{
      const user = jwtDecode(jwt);
      this.setState({user});
    }catch{
      const response = await axios.get('/api/user',{headers:{Authorization: 'Bearer' + jwt}})
      this.setState({
        user:response.data.id
      })
    }
  }


  async getStory(){
    let response = await axios.get('')
    this.setState({
      user:response.data.id
    })
  }
  
   handleChange = (event) =>{
    this.setState({
        [event.target.name]: event.target.value
    })
   }

   handleSubmit = (event) =>{
    event.preventDefault();
    this.filteredSearch()

}
  
filteredSearch = () =>{
  let filteredResults = this.state.product.filter(product => {
      return product.name.toLowerCase().includes(this.state.search.toLowerCase())
  })
  this.setState({
      product : filteredResults
  })
}
 


  render() { 
    return (  
    <React.Fragment>
       {console.log(this.state.user.id)}
       <table className="storytable" class="table">    
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Genre</th>
                <th>Story Type</th>
                <th>
                <form onSubmit = {this.handleSubmit}>
                <input name= 'search' onChange = {this.handleChange} value = {this.state.search}/>
                <button type = 'submit'>Search</button>                 
                </form>  
                </th>
            </tr>
            {this.state.story.map((element)=><><tbody>{console.log(element)}
            <tr class="active-row"></tr>
            <td data-th ="Author"></td>
            <td data-th ="Title"></td>
            <td data-th ="Genre"></td>
            <td data-th ="StoryType"></td>
            <td></td>



            
            
            
            
            

            </tbody></>)}
    </table>

    </React.Fragment>
    );
  }
}
 
export default StoryTable;