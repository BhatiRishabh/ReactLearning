import React from "react";

function NameList(){
    const names=[{id:1, call:"Tony"}, {id:2, call:"Steve"},{id:3, call:"Clark"}]
    const namelist=names.map(name => <h2 key={name.id}>{name.call} </h2> )
    return (
    <div>
        {namelist}
    </div>)
}

export default NameList

//"Key" prop is reserved, to pass on the same values we need to use some different prop 