import React, {Component} from 'react';
import './Navbar.css'

export default class Navbar extends Component {
    render(){
        return(
            <div>
                <div class="main-navbar">
                    <div class="sub-navbar">
                    <img alt="logo" src=""></img>
                        <a class="line-1" href="/home">reliabel</a>
                        <a class="line-2" href="/news">Artikel</a>
                        <a class="line-3" href="/contact">Tutorial</a>
                        {/* <a class="line-4" href="#about">About</a> */}
                    </div>
                </div> 
                
            </div>
        )
    }
}