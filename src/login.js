import Paper from '@mui/material/Paper'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {TextField}  from "@mui/material"
function Login() {

    const [userId,setUserId]=useState('')
    const [password,setPassword]=useState('')
    const [status,setStatus]=useState('')
    const navigate=useNavigate()
    return (
        <>

    <h1> Login Page </h1>

    <Paper elevation={10}>
  <div style={{backgroundColor:"beige"}}>
  <label >Enter User Id</label><br/>
     <TextField  type='text'
     
     inputProps={{ "data-testid": "userid" }}
     
     value=""


     onChange={(e)=>{
         setUserId(e.target.value)
     }} /><br/>
     <label>Enter Password</label><br/>
     <TextField  type='password'
     
     inputProps={{ "data-testid": "password" }}
     value=""
     onChange={(e)=>{setPassword(e.target.value)}}/><br/>
     <input data-testid="btn" type='button' value='Login' onClick={()=>{

       axios.get(`http://localhost:8081/finduser/${userId}`)
            .then((res)=>{
                var data=res.data
                if(data.role==="admin")
                {
                        if(data.userEmail===userId && data.password===password )
                        {
                            sessionStorage.setItem("username",data.userEmail)
                    navigate("/home")        
                        }
                        else
                        {
                            setStatus("invalid details")
                        }
                }
                else if(data.role==="user")
                {

                    if(data.userEmail===userId && data.password===password )
                    {
                        sessionStorage.setItem("username",data.userEmail)
                        setStatus("valid user")
                navigate("/user")        
                    }
                    else
                    {
                        setStatus("invalid details")
                    }

            
                }
            })



     }} /><br/>
     <label data-testid="msglbl">{status}</label>
  </div>
 

    </Paper>
    </>
    )
}

export default Login