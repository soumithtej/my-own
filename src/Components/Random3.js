/*import { Environment } from "ag-grid-community"


const ADD_EMPLOYEE=gql`
    mutation newEmployee($email:String!, $password:String!, $fullname:String!, $salary:String!) {
        addEmployee(data:{
            email
            password
            fullname
            salary
        }{
            id
            email
            password
            fullname
            salary
        }
    }`


    
    return(
        <div key={`${id}`}>
        <Mutation mutation={NEW_EMPLOYEE}>
            { (addEmployee, {data}) =>(
                <div>
                    <button onClick={addEmployee({
                        variables: {email: `${email}`,password:`${password}`,fullname:`${fullname}`,salary:`${salary}`}
                    })}>
                        Add Employee
                    </button>
                </div>
                
            )}
        </Mutation>
        </div>
    )
    */

