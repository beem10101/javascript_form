import React, { useState } from 'react'
import '../App.css';
import { db } from "../Firebase";


const Project1 = () => {
    const [name,setName] = useState("");
    const [tel, setTel] = useState("");
    const [nickname, setNickname] = useState("");
    const [formLoad, setformLoad] = useState(false);
    
    const handleSubmit = (e) =>{
        // e.preventDefault();
        setformLoad(true);
        db.collection('information').add({
         name: name,
         tel: tel,
         nickname: nickname, 
        })
        .then(()=>{
        alert(" info add!!!");
        setformLoad(false);
        })
        .catch((error)=>{
          alert(error.message)
          setformLoad(false);
        }
        )
        
        setName("");
        setNickname("");
        setTel("");

        // console.log()
    }
    return (
    <form className="form" onSubmit={handleSubmit}>
        <h1>information</h1> 
        <label>Name</label>
        {/* <label>{name}</label> */}
        <input placeholder='fullName' 
        value={name}
        onChange={(e)=>setName(e.target.value)}>
        </input>
  
        <label>Nickname</label>
        {/* <label>{nickname}</label> */}
        <input placeholder='nickname'
        value={nickname}
        onChange={(e)=>setNickname(e.target.value)}>
        </input>

        <label>Tel.</label>
        {/* <label>{tel}</label> */}
        <input placeholder='0xx-xxx-xxxx'
        value={tel} onChange={(e)=>setTel(e.target.value)}></input>

        <button type="submit" style={{background: formLoad ? "#ccc" : "rgb(2, 2, 110)"}}>submit</button>
    </form>
  )
}

export default Project1