import { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state={
            message:"Jai Shree Radha"
        }
    }
change(){
    this.setState({
        message: "JAI SHREE RAM!!"
    },()=>{
        console.log("Done!")
    })
    
}
    render(){
        return(
            <>
            <h2>Bolo {this.state.message}</h2>
            <button onClick={()=> this.change()}>Chnage</button>
            </>
        )
    }
}

export default Message