import React ,{Component} from "react";


class Form extends Component{
    
    constructor(props){
        super(props)
        this.state={
            username:'',
            comment:''
        }
    }
handleUsernameChange=(event)=>{
    this.setState({
        username: event.target.value
    })
}
handleCommentChange=(event)=>{
    this.setState({
        comment: event.target.value
    })
}
handleSubmit=(event)=>{
    alert(`${this.state.username} has this comments: ${this.state.comment} `)
    
}
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' 
                value={this.state.username}
                onChange={this.handleUsernameChange}
                />
            </div>
            <br></br>
            <div>
                <label>Comment</label>
                <textarea value={this.state.comment}
                onChange={this.handleCommentChange}>
                </textarea>
            </div>
            <br/>
            <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Form