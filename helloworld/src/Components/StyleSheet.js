import React from "react";
import './mystyle.css'

function StyleSheet(props)
{
    let classname=props.class
    return(
        <>
        <h1 className={`${classname} font-xl`}>Stylesheet</h1>
        </>
    )
}
export default StyleSheet 