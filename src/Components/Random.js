import React from 'react';
import {Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import {useState } from 'react';

function Random()
{
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [salary,setSalary]=useState(undefined);
    const [addUserButtonDisable,setAddUserButtonDisable]=useState(false);
    const [isInputDisabled,setIsInputDisabled]=useState(true);
    const [alertModalIsOpen,setAlertModalOpen]=useState(false);

    function addUser()
    {
        setAddUserButtonDisable(true);
        setIsInputDisabled(false);
        setAlertModalOpen(true);
    }

    const handleEmail=(event)=>
    {
        setEmail(event.target.value);
    }

    const handleName=(event)=>
    {
        setFullname(event.target.value);
    }

    const handlePassword=(event)=>
    {
        setPassword(event.target.value);
    }

    const handleSalary=(event)=>
    {
        setSalary(event.target.value);
    }

    const addUserConfirmed=()=>
    {
        <Mutation mutation={gql`
            {
                addEmployee(data:{
                    fullname:${fullname}
                    email:${email}
                    password:${password}
                    salary:${salary}
                }){
                    id  
                    email
                    password
                    fullname
                    salary
                }   
            }` }>

            {( {loading, error,data} ) => {
                        if (loading) return <p>loading.....</p>
                        if (error) return <p>Error</p>

                        return  data.addEmployee.map(({email,salary}) =>(
                            <div>
                                <p>{`Email is ${email} & salary=${salary}`} </p>
                                <div>User added successfully......1</div>
                            </div>
                        )   )
                    }}
            </Mutation>
    }


        return(
            <div>
                
                <div>
                <button onClick={addUser} disabled={addUserButtonDisable}>Add Employee</button>
            </div>

            <div>
                <label>Fullname</label>
                <input type="text" value={fullname} onChange={(event)=>handleName(event)} disabled={isInputDisabled}/>

                <label>Email</label>
                <input type="text" value={email} onChange={(event)=>handleEmail(event)} disabled={isInputDisabled}/>

                <label>password</label>
                <input type="text" value={password} onChange={(event)=>handlePassword(event)} disabled={isInputDisabled}/>

                <label>salary</label>
                <input type="text" value={salary} onChange={(event)=>handleSalary(event)} disabled={isInputDisabled}/>
            </div>
            <div>
                <button onClick={addUserConfirmed} >Confirm</button>
            </div>  
            </div>
        )

        
}
export default Random;
