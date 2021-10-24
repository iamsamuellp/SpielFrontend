import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';

//This component fetches the genre of the product.
//Because we didnt have a "genre" row in our table, we had to utilize the search endpoint we created as a workaround.
//This endpoint when tested in postaman returned the product as well as all the linked foreign key data. The genre was one of these datapoints
class GetStory extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            story:[]
         }
    }
    componentDidMount() {
        this.genreType()
    }

    //If we had a genre field in our products table, we wouldnt need to use this function, as we could just map through it on the products list page.
    async GetStory(){
        console.log(this.props.story)
        var search = (this.props.story).slice(0,6)
        var response = await axios.get(`https://localhost:44394/api/story/searchresults${search}`)
        this.setState({
            story:response.data
        })
        
    }
    
    render() { 
        return ( 
            <React.Fragment>
            {this.state.story.map((element) => <tr>{element.story.type}</tr>)}
            </React.Fragment>
         );
    }
}
 
export default GetStory;
