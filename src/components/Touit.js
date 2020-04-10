import React from 'react';
import Comment from '../components/Comment';
import '../css/touit.css';
import {searchComment, likeTouit, dislikeTouit, submitComment} from '../api/TouitAPI';

class Touit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            comments : [],
            viewComments : false,
            like:false,
            textLike : "J'aime",
            error : false,
        }
    }
    seeComments =() => {
        if(this.state.viewComments === false){
            searchComment(this.props.id).then(data => { 
                this.setState({
                    comments : data.comments,
                    viewComments : true,
                })
            })
        }else{
            this.setState({
                comments : [], 
                viewComments : false, 
            })
        }
    }
    
    addLike = () => {
        if(this.state.like === false){
            likeTouit(this.props.id).then(data => {
                if(data !== "error" && data.data.success){
                    this.setState({
                        textLike : "Je n'aime plus", 
                        like: true,
                    })
                }
            })
        }else{
            dislikeTouit(this.props.id).then(data => {
                if(data !== "error" && data.data.success){
                    this.setState({
                        textLike : "J'aime", 
                        like:false,
                    })
                }
            })
        }
    }
    
    
    submitMyComment = (e)=> {
        e.preventDefault()
        e.stopPropagation()
        let pseudo = e.target[0].value
        let msg = e.target[2].value
        submitComment(this.props.id, msg, pseudo).then(data => {
            if(data !== "error" && data.success){
                if(this.state.viewComments === true){
                    this.setState({
                        viewComments : false
                    })
                    this.seeComments()
                }
                this.setState({error:false})
            }else{
                this.setState({error:true})
            }
        })
        
    }

    render(){
        const {comments_count, id, likes, message, name, ts} = this.props
        return(
            <div className="touit" id={id}>
                <h2>{name}</h2>
                <p>{message}</p>
                <p>{ts}</p>
                
                <div>
                    <button onClick={this.seeComments}>Voir le(s) {comments_count} Commentaire(s)</button>
                    <button onClick={this.addLike}>{this.state.textLike}</button>
                </div>
                <p>{likes} ♡♡ </p>
                <div className="comments">
                    {this.state.comments.map(
                        (m,i) => < Comment key={i} {...m}/>
                    )}
                </div>
                <div className="writeComment">
                    <hr/>
                    <p>{this.state.error ? "Un problème est survenu lors de l'envoi du commentaire" : ""}</p>
                    <form onSubmit={this.submitMyComment} id={"form"+id}>
                        <div>
                            
                            <input type="text" className="pseudoComment" placeholder="Pseudo" minLength="3" maxLength="16" />
                            <button type="submit">Envoyer</button>
                        </div>
                        
                        <textarea type="text" className="messageComment" placeholder="mon commentaire ... blah blah blah" minLength="3" maxLength="256" cols="45"
                            rows="4"></textarea>
            
                    </form>
                </div>
            </div>
        )
    }
}

export default Touit