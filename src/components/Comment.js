import React from 'react';

class Comment extends React.Component{

    
    render(){
        const{comment, name, ts} = this.props
        return(
            <div className="oneComment" >
                <hr/>
                <p>{name}</p>
                <p>{comment}</p>
                <p>{ts}</p>
            </div>
        )
    }
}

export default Comment