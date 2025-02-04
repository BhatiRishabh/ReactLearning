import React from "react"

function functionClicked(){
    function display(){
        console.log("Button Cliked")
    }
    return(
        <>
        <button onClick={display}></button>
        </>
    )
}