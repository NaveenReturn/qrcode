import React,{useState} from 'react'

export const UserDetails = () => {
    const [userName,setUserName] = useState("Ram");
    const [email,setEmail] = useState(21);
    const [user,setUser] = useState({
        name:"RAM",
        email:21
    })
    const hadleName = (e)=>{
        //  console.log(e.target.value)
        const newObjectValue = {...user};
        newObjectValue.name = e.target.value;
        setUser(newObjectValue)
    }
    const hadleEmail = (e)=>{
        //  console.log(e.target.value)

        setUser((oldvalue)=>{
           return {...oldvalue, email:e.target.value}
        })
    }

    const onChange = (e)=>{
        
        setUser({...user,[e.target.name]:e.target.value})
    }
  return (
    <>
      <h1>User Details</h1>
      <h3>{user.name}</h3>
      <h3>{email}</h3>

      <input type='text' name='name' value={user.name} onChange={onChange} placeholder='Enter your name...' />
      <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
    </>
  )
}
