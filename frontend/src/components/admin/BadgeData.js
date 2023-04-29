import React, { useEffect, useState } from 'react'

const BadgeData = () => {

    const [badgeList, setBadgeList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/badge/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setBadgeList(data);
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
                <th>Title</th>
                <th>Course</th>
                <th>Description</th>
                <th>Icon</th>
                <th>Created At</th>
                <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                    {
                        badgeList.map( (user) => 
                        <tr>
                        <td>{user._id}</td>
                        <td>{user.title}</td>
                        <td>{user.course}</td>
                        <td>{user.description}</td>
                        <td>{user.icon}</td>
                        <td>{user.createdAt}</td>
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
    
    export default BadgeData