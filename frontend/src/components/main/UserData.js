import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const UserData = () => {

    const [userList, setUserList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/user/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setUserList(data);
    }

    

    useEffect(() => {
        fetchUserData();

    }, [])

    const deleteUser = async (id) => {
        console.log(id);
        const res = await fetch('http://localhost:5000/userData/delete/'+id,
        {
            method: 'DELETE',
        });
    console.log(res.status);
    if(res.status === 200)
    {
        fetchUserData();
        // alert("User Deleted Successfully");
        Swal.fire({
            icon: 'success',
            title: 'success',
            text: 'User Deleted Successfully',
        })
    }
}

    return (
        <div className="tab3 p-md-3">
          <h1 className="container-fluid text-center badgeHeading3"> Manage user data</h1>
          <table className="table container-fluid badgeTable3 ">
          <thead className="fs-4 headBlock3">
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Conatct</th>
                <th>Password</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody className="bodyBlock3">
                    {
                        userList.map( (user) => 
                        <tr>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.password}</td>
                        <td>
                            <button className='btn btn-danger'
                            onClick={() => deleteUser(user._id)}
                            >
                                Delete</button>
                        </td>
                    </tr>
                        )
                    }
            </tbody>
          </table>
        </div>
      )
    }
    
    export default UserData;