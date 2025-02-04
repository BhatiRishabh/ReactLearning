import React,{useState, useEffect} from "react"

// function HookState(){
//     const [count, setCount]=useState(0)

//     return(
//         <>
//         <button onClick={()=>setCount(prevCount=>prevCount+1)}>Count {count}</button>
//         </>
//     )
// }

// export default HookState


// function HookCounter(){
//     const [names,setName]=useState({firstname:'',lastname:''})
//     return(
//         <>

//         <form>
//             <input type='text' value={names.firstname} name='firstname' onChange={e=> setName({...names, firstname: e.target.value})}/>
//             <input type='text' value={names.lastname} name='firstname' onChange={e=> setName({...names, lastname: e.target.value})}/>

//         </form>
//         </>
//     )
// }
// export default HookCounter



// function HookCounter(){

//     const[count, setCount]=useState(0)
//     useEffect(()=>{
//         document.title=`You clicked ${count} times`

//     })
//     return(
//         <>
//         <button onClick={()=> setCount(count+1)}>Clicked {count} times</button>    
//         </>
//     )
// }   
// export default HookCounter


// function HookMouse(){
//     const[x,setX]=useState()
//     const[y,sety]=useState()
//     useEffect(()=>{
//         window.addEventListener("mousemove",(e)=>{
//             setX(e.clientX)
//             sety(e.clientY)
//         })
//     },[])
//     return(
//         <>
//         Hooks X - {x} Y - {y}
//         </>
//     )
// }                       
// export default HookMouse


