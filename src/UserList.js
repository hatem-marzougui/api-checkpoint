import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css'

function UserList() {
  const [listOfUSer , setlistOfUser ] = useState([]);
 useEffect(() => {
   const fetchData = async () => {
     const result = await axios.get( "https://jsonplaceholder.typicode.com/users");
     setlistOfUser(result.data);
   };
   fetchData();
 }, 
 
 []);

console.log("listOfUser= ",listOfUSer);
 
 return (
 
  <table>
  <tr id="head">
  <th >Name</th>
  <th >User Name</th>
  <th >Email</th>
  <th >Phone</th>
  <th >Website</th>
  </tr>
   
     {listOfUSer.map(user=>(
           <tr key={user.id} >
           
     <td> {user.name} </td>
     <td> {user.username} </td>
     <td >{user.email} </td>
     <td > {user.phone} </td>
     <td > {user.website} </td>

         </tr>
     ))}
  
   
  </table>
  
 );
}
export default UserList;