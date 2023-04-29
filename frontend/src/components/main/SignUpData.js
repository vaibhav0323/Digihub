import React, { useEffect, useState } from 'react'

const SignUpData = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/signUp/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    }



    useEffect(() => {
        fetchUserData();

    }, [])
    
    return (
        <div className='tab'>
          <p className='display-4 text-center'> Manage user data</p>
          <hr/>
          <table className='table'>
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Conatct</th>
                <th>Role</th>
                <th>Password</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                    {
                        userList.map( (user) => 
                        <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.role}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className='btn btn-danger'>Delete</button>
                        </td>
                    </tr>
                        )
                    }
            </tbody>
          </table>
        </div>
      )
    }
    
    export default SignUpData