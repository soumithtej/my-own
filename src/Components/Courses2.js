// import React,{useState} from 'react';
// import {Query,Mutation } from 'react-apollo';
// import gql from 'graphql-tag';

// function Courses()
// {
//     const [isUpdateActive,setUpdateActive]=useState(false);   
//     const [fullnameState,setFullname]=useState('');
//     const [emailState,setEmail]=useState('');
//     const [passwordState,setPassword]=useState('');
//     const [salaryState,setSalary]=useState(undefined);    

//     const ADD_EMPLOYEE=gql`
//     mutation addEmployee($email:String!, $password:String!, $fullname:String!, $salary:String!) {
//         addEmployee(
//             email:${emailState}
//             password:${passwordState}
//             fullname:${fullnameState}
//             salary:${salaryState}
//         ){
//             id
//             email
//             password
//             fullname
//             salary
//         }
//     }`

//     const handleEmail=(event)=>
//     {
//         setEmail(event.target.value)
//     }

//     const handleFullname=(event)=>
//     {
//         setFullname(event.target.value);
//     }

//     const handlePassword=(event)=>
//     {
//         setPassword(event.target.value);
//     }

//     const handleSalary=(event)=>
//     {
//         setSalary(event.target.value);
//     }

//     const handleEdit=(email,password,fullname,salary)=>
//     {
//         setUpdateActive(true);
//         setEmail(email); setPassword(password); setFullname(fullname); setSalary(salary);

//     }

//     return(
//         <div>
            
//             <table class="table">
//                     <thead>
//                         <tr>
//                         <th scope="col">id</th>
//                         <th scope="col">email</th>
//                         <th scope="col">password</th>
//                         <th scope="col">Fullname</th>
//                         <th scope="col">Salary</th>
//                         <th scope="col">Edit/Delete</th>
//                         </tr>
//                     </thead>
                     
             
//             <Query query={gql`{
//                 getEmployees{
//                     id
//                     fullname
//                     salary
//                     email
//                     password
//                 }  }
//             `}>
//                 {({loading, error,data}) => {
//                     if (loading) return <p>loading.....</p>
//                     if (error) return <p>Error</p>
                    
//                     return data.getEmployees.map(({id,fullname,email,password,salary}) => (
//                         <tbody>
//                             <tr>
//                                 <td>{`${id}`}</td>
//                                 {isUpdateActive ? <input type="text" value={emailState} onChange={(event)=>handleEmail(event)} /> :<td>{`${email}`}</td> }
//                                 {isUpdateActive ? <input type="text" value={passwordState} onChange={(event)=>handlePassword(event)} /> :<td>{`${password}`}</td> }
//                                 {isUpdateActive ? <input type="text" value={fullnameState} onChange={(event)=>handleFullname(event)} /> :<td>{`${fullname}`}</td> }
//                                 {isUpdateActive ? <input type="text" value={salaryState} onChange={(event)=>handleSalary(event)} /> :<td>{`${salary}`}</td> }
//                                 <td>
//                                     <button className="glyphicon glyphicon-edit" onClick={()=>handleEdit(`${email}`,`${password}`,`${fullname}`,`${salary}`)}></button>
//                                     <button className="glyphicon glyphicon-trash" onClick={()=>deleteEmployee(`${id}`)}></button>
//                                     <button onClick={()=>updateEmployee(`${id}`,`${email}`,`${password}`,`${fullname}`,`${salary}`)}>Save Details</button>
//                                     <Mutation mutation={ADD_EMPLOYEE}>
//                                         { (addEmployee, {data}) =>(
//                                             <div>
//                                                 <button onClick={addEmployee({
//                                                     variables: {email: `${emailState}`,password:`${passwordState}`,fullname:`${fullnameState}`,salary:`${salaryState}`}
//                                                 })}>
//                                                     Add Employee
//                                                 </button>
//                                             </div>
//                                         )}
//                                     </Mutation>
//                                 </td>
//                             </tr>
//                         </tbody>
//                     ))
//                 }}
//             </Query> 
    
//     </table>  
//             <div>
//             <label>Fullname</label>
//             <input type="text" value={fullnameState} onChange={(event)=>handleFullname(event)}/>

//             <label>Email</label>
//             <input type="text" value={emailState} onChange={(event)=>handleEmail(event)} />

//             <label>password</label>
//             <input type="text" value={passwordState} onChange={(event)=>handlePassword(event)} />

//             <label>salary</label>
//             <input type="text" value={salaryState} onChange={(event)=>handleSalary(event)} />
//             </div>
//         </div>

//     )

// }



// export default Courses; 