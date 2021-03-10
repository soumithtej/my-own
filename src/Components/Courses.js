import React,{useState} from 'react';
import {Query,Mutation } from 'react-apollo';
import gql from 'graphql-tag';

function Courses()
{
    const [isUpdateActive,setUpdateActive]=useState(false);   
    const [fullnameState,setFullname]=useState('');
    const [emailState,setEmail]=useState('');
    const [passwordState,setPassword]=useState('');
    const [salaryState,setSalary]=useState(undefined);    

    const deleteEmployee=(id)=>
    {
        <Mutation mutation={gql`
            {
                deleteEmployee(data:{
                    id:${id}
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

                        return  data.deleteEmployee.map(({id}) =>(
                            <div>
                                <p>{`EmpId is ${id}`} </p>
                            </div>
                        )   )
                    }}
            </Mutation>
    }

    const updateEmployee=(id,email,password,fullname,salary)=>
    {
       
        <Mutation mutation={gql`
            {
                updateEmployee(data:{
                    email:${email}
                    password:${password}
                    fullname:${fullname}
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

                        return  data.updateEmployee.map(({id}) =>(
                            <div>
                                <p>{`EmpId is ${id} & email is ${email}`} </p>
                            </div>
                        )   )
                    }}
            </Mutation>

        
    }

    const handleEmail=(event)=>
    {
        setEmail(event.target.value)
    }

    const handleFullname=(event)=>
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

    const handleEdit=(email,password,fullname,salary)=>
    {
        setUpdateActive(true);
        console.log(isUpdateActive);
        setEmail(email); setPassword(password); setFullname(fullname); setSalary(salary);

    }

    return(
        <div>
            
            <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">email</th>
                        <th scope="col">password</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Edit/Delete</th>
                        </tr>
                    </thead>
                     
             
            <Query query={gql`{
                getEmployees{
                    id
                    fullname
                    salary
                    email
                    password
                }  }
            `}>
                {({loading, error,data}) => {
                    if (loading) return <p>loading.....</p>
                    if (error) return <p>Error</p>
                    
                    return data.getEmployees.map(({id,fullname,email,password,salary}) => (
                        <tbody>
                            <tr>
                                <td>{`${id}`}</td>
                                {isUpdateActive && email == emailState ? <td> <input type="text" value={emailState} onChange={(event)=>handleEmail(event)} /> </td>:<td>{`${email}`}</td> }
                                {isUpdateActive && email == emailState ? <td> <input type="text" value={passwordState} onChange={(event)=>handlePassword(event)} /> </td>:<td>{`${password}`}</td> }
                                {isUpdateActive && email == emailState ? <td> <input type="text" value={fullnameState} onChange={(event)=>handleFullname(event)} /> </td>:<td>{`${fullname}`}</td> }
                                {isUpdateActive && email == emailState ? <td> <input type="text" value={salaryState} onChange={(event)=>handleSalary(event)} /> </td>:<td>{`${salary}`}</td> }
                                <td>
                                    <button className="glyphicon glyphicon-edit" onClick={()=>handleEdit(`${email}`,`${password}`,`${fullname}`,`${salary}`)}></button>
                                    <button className="glyphicon glyphicon-trash" onClick={()=>deleteEmployee(`${id}`)}></button>
                                    <button onClick={()=>updateEmployee(`${id}`,`${emailState}`,`${passwordState}`,`${fullnameState}`,`${salaryState}`)}>Save Details</button>
                                </td>
                            </tr>)
                        </tbody>
                    ))
                }}
            </Query> 
    
    </table>  
            
        </div>

    )

}



export default Courses;