import React, { useEffect, useState } from 'react'

const LoginData = () => {

    const [loginList, setloginList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/login/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setloginList(data);
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
                <th>Email</th>
                <th>Password</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                    {
                        loginList.map( (user) => 
                        <tr>
                        <td>{user._id}</td>
                        <td>{user.email}</td>
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
    
    export default LoginData