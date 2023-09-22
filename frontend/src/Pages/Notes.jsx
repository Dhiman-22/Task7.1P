import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../context/AuthContextProvider";

let token=localStorage.getItem("token");

const Notes=()=>{
    const [notes,setNotes]=useState([]);
    const {token}=useContext(AuthContext)
    //getting the notes
    useEffect(()=>{
        fetch("http://localhost:4500/notes",{
            headers:{
                "Authorization": `Bearer ${token}`
            }
        }).then(res=>res.json())
        .then(res=>{
            console.log(res)
            setNotes(res)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
{token?
notes.length>0?
notes.map((ele)=>
    <div>
        <h3>{ele.title}</h3>
        <p>{ele.body}</p>
        <button>Delete</button>
    </div>
):<div>
    <h1>There is no note for the user</h1>
</div>:<h1>Kindly Do Login First</h1>

            
        } 
            
        </>
    )
}

export {Notes}