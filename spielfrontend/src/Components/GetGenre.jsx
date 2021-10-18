import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';


class GetGenre extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            genre:[]
         }
    }
    componentDidMount() {
        this.genreType()
    }


    async genreType(){
        console.log(this.props.story)
        var search = (this.props.story).slice(0,6)
        var response = await axios.get(``)
        this.setState({
            genre:response.data
        })
        
    }
    
    render() { 
        return ( 
            <React.Fragment>
            {this.state.genre.map((element) => <tr>{element.genres.type}</tr>)}
            </React.Fragment>
         );
    }
}
 
export default GetGenre;