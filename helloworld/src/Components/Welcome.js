import { Component } from "react";

class Welcome extends Component{
    render(){
        return(
            <>
            <h2>Kya bolre h ye mujhe sunai ni dera!!!</h2>
            <p>Bro this is {this.props.name} a.k.a {this.props.heroname}</p>
            <p>----Bro mat bol me bhai ni tera----</p>
            
            </>
        )
    }
}

export default Welcome