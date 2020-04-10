import React from 'react';
import Touit from '../components/Touit';
import {homeTouits} from '../api/TouitAPI';
import '../css/touitCont.css';


class TouitContainer extends React.Component{
constructor(props){
    super(props)
    this.state = {
        allTouits : [],
        error : false,
    }
    this.interval = false
}


    componentDidMount(){
        this.interval = setInterval(()=> {homeTouits().then(data => {
            if(data !== "error"){
                this.setState({
                    allTouits : data,
                    error : false
                })
            }else{
                this.setState({error:true})
            }
        })}, 1000)
    }

    render(){
        return(
            
            <div className="oneTouit">
                {this.state.error ? <p>"Une erreur est survenue lors du chargement des commentaires."</p> : this.state.allTouits.map(
                    (m,i) => < Touit key={i} {...m}/>
                )}   
            </div>
            
        )
    }


    componentWillUnmount(){
        clearInterval(this.interval)
    }
}

export default TouitContainer