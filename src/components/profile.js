import React from 'react'
// import app from './firebase'
// import {getDatabase,update, ref,get, push, set,remove ,child} from "firebase/database";

 function Profile(props) {
   
 
     
  
    // console.log(props.user)
    return (
        <>
        {/* {props.user&& */}
        <div className="profilemain">
            <div className="profileheading">
                <h1>YOUR PROFILE</h1>
            </div>
            <div className="profiledata">
                <h2> USERNAME:</h2>
                <h4><u> {props.user.name}</u></h4>
                <h2>EMAIL:</h2>
                <h4><u> {props.user.password}</u></h4>
                <h2>ADDRESS:</h2>
                <h4><u> {props.user.Address}</u></h4>
                <h2>CITY:</h2>
                <h4><u> {props.user.City}</u></h4>
             
            </div>
        </div>
        </>
    )
}
export default Profile
