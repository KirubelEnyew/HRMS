import React from 'react';

const Madafaka = () => {
    const [email, setEmail] = React.useState("");
    const [pass, setPass] = React.useState("");
    const handleClick = ()=>{
        console.log(email)
        console.log(pass)        
    }
    return (
        <div>
            <form onSubmit={handleClick}>
            <input onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" onChange={(e)=>{setPass(e.target.value)}}/>
            <button type = "submit" >GF</button>
            </form>
        </div>);

}

export default Madafaka;