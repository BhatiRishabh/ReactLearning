// import React from 'react'

// function Greet(props){
//     return (
//         <>
//         <h1>Hola {props.name}</h1>
//         <p>kese ho thik ho</p>
//         </>
//     )
// }

// export default Greet

// import React from 'react'

// const Greet= ({name}) => {
//     return (
//         <>
//         <h1>Hola {name}</h1>
//         <p>kese ho thik ho</p>
//         </>
//     )
// }

// export default Greet


import React from 'react'

const Greet= (props) => {
    const {name}=props
    return (
        <>
        <h1>Hola {name}</h1>
        <p>kese ho thik ho</p>
        </>
    )
}

export default Greet