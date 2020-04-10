import React from 'react';
import '../css/send.css';
import '../api/TouitAPI';
import {sendTouit} from '../api/TouitAPI';

class Send extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            reponse : ""
        }
    }


    mySubmitHandler = (e) => {
        let pseudo = e.target[0].value
        let msg = e.target[1].value
        
        sendTouit(e,msg, pseudo ).then(data => {
            this.setState({
                reponse : data
            })
        })
    }

    render(){
        

        return(
            <div className="write" >
                <h2>Ecris un touit</h2>
                <form onSubmit={this.mySubmitHandler}>
                    <div>
                        <label htmlFor="pseudo">Pseudo : </label>
                        <input type="text" id="pseudo" placeholder="Marguerite" minLength="3" maxLength="16" />
                    </div>
                    <div>
                        <textarea type="text" id="messageArea" placeholder="Hi !" minLength="3" maxLength="256" cols="65"
                        rows="9"></textarea>
                        <button type="submit">Envoyer</button>
                    </div>
        
                </form>
        <p id="responseSend">{this.state.reponse}</p>
            </div>
        )
    }
}

export default Send