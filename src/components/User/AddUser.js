import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css'
const AddUser=props=>{
    const [username,setUsername]=useState('')
    const [age,setAge]=useState('')
    const [err,setErr]=useState({})

    const addUserHandler=event=>{
        event.preventDefault();
        if(username.trim().length===0 || age.trim().length===0)
        { setErr({title:'Invalid input username', message:'Please enter a valid username and age that is non empty'})
            return;}
        if(+age<1){
            setErr({
                title: 'Invalid age',
                message:'Please enter a valid age >1'
            })
            return;}
        props.onAddUser(username,age)
        
    }

    const setEnteredUsername=(event)=>{
        setUsername(event.target.value)
    }

    const setEnteredAge=(event)=>{
        setAge(event.target.value)
    }

    const errorHandler=()=>{
        setErr(null)
    }
    return(
        <div>
        {err && <ErrorModal title={err.title} message={err.message} onOk={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler} className='addUser'>
            <label htmlFor="username"> UserName </label>
                <input value={username} className='username-input' onChange={setEnteredUsername} type='text'/>
                <label className="age-input" > Age </label>
                <input value={age} type='number' onChange={setEnteredAge}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </div>
    )

}

export default AddUser;