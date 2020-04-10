import React from 'react';
import '../css/header.css';


class Header extends React.Component{

    render(){
        return(
            <div>
                <img src='ponyo.png' alt='logo'/>
                <h1> TOUITEUR REACT PONYO</h1>
            </div>
        )
    }
}

export default Header