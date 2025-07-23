import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let navigate = useNavigate()
    const[input,setInput] = useState("");
    function handleJoin(){
        navigate(`/room/${input}`)
    }
  return (
    <div id='home'>
      <input type="text" placeholder='enter room ID' value={input} onChange={(e)=>setInput(e.target.value)}/>
      <button onClick={handleJoin}>JOIN NOW</button>
    </div>
  )
}

export default Home
