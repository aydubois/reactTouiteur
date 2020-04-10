import React from 'react';
import {trending} from '../api/TouitAPI';
import '../css/trending.css';
class Trending extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            see: false,
            trend1 : null,
            trend2 : null, 
            trend3 : null,
        }
    }


    seeTrending = () => {
        if(this.state.see === false){
            trending().then(data => {
            
                if(data !== "error"){

                    this.setState({
                        trend1 : data[0],
                        trend2 : data[1],
                        trend3 : data[2],
                        see : true, 
                    })
                }else{
                    this.setState({
                        trend1 : "une erreur est survenue lors du chargement"
                    })
                }
            })
        }else{
            this.setState({
                see : false,
                trend1 : null,
                trend2 : null,
                trend3 : null,

            })
        }
    }


    render(){
        const{trend1, trend2, trend3} = this.state
        return(
            <section className="trending">
                <button onClick={this.seeTrending}>Trending</button>
                <div>
                    
                    <p>{trend1 ? trend1[0]+"  x" +trend1[1]: ""}</p>
                    <p>{trend2 ? trend2[0]+"  x" +trend2[1]: ""}</p>
                    <p>{trend3 ? trend3[0]+"  x" +trend3[1]: ""}</p>

                </div>
            </section>
        )
    }
}

export default Trending