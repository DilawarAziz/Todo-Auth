// import { set } from "@firebase/database";
import {React,useState} from "react";
// import { initializeApp } from "firebase/app";

import app from './firebase'
import {getDatabase,update, ref,get, push, set,remove ,child} from "firebase/database";





function Signup(props) {
    // const db = initializeApp(firebaseConfig);
    const [user, setuser] = useState({
      name:"",
      password:"",
      email:"",
      Address:"",
      City:"",
      
    })
    
    let name,value;
    ;
    let handleinput=(e)=>{
      // console.log(e)
      name=e.target.name;
      value=e.target.value
      
      setuser({...user ,[name]:value})
      console.log(user.email)
    }
    const db = getDatabase(app);
    let setdata = ()=>{
      
      // push((ref(db, user.name)),{
      props.getUser(user)
    set(ref(db,'user/'+ user.name),{
        Name:user.name,
        Email:user.email,
        Password:user.password,
        City:user.City,
        Address:user.Address
    })
    // setuser({
  
    //     password:"",
    //     email:"",
    //     Address:"",
    //     City:""
    // })

}
let Editdata = ()=>{
 
     
      update(ref(db, 'user/' + user.name), {
            Name:user.name,
            Email:user.email,
            Password:user.password,
            City:user.City,
            Address:user.Address
          
        });
      //         get(child(ref(db),( 'user/' + user.name))).then((snapshot)=>{
      // console.log(snapshot.val())
      // setuser({
      //   ...user,
      //     // user.name=snapshot.val().name,
      //     // password:snapshot.val().password,
      //     Address:snapshot.val().Address,
      //     City:snapshot.val().City,
      //     email:snapshot.val().email
      // })
      // })
        // remove.set(ref("user"))
      
}

  
   // remove.set(ref("user"))
  


let deletedata=()=>{
 remove(ref(db, 'user/' + user.name))

}

  return (
    <div className="signup" >
        <form className="row g-3">
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">User Name</label> 
    <input name="name" onChange={handleinput} value={user.name} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputEmail4" className="form-label">Email</label> 
    <input name="email" onChange={handleinput} value={user.email} type="email" className="form-control" id="inputEmail4"/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input name="password" onChange={handleinput} value={user.password} type="password" className="form-control" id="inputPassword4"/>
  </div>
  <div className="col-6">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input name="Address" onChange={handleinput} value={user.Address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  
  <div className="col-md-10 ">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input name="City" onChange={handleinput} value={user.City} type="text" className="form-control" id="inputCity"/>
  </div>
  {/* <div className="col-md-6"> */}
    {/* <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select">
      <option select="true">Choose...</option>
      <option>...</option>
    </select> */}
  {/* </div> */}
  {/* <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input name= onChange={handleinput} value={user.name} type="text" className="form-control" id="inputZip"/>
  </div> */}
  {/* <div className="col-12">
    <div className="form-check">
      <input name="" onChange={handleinput} value={user.name} className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <div className="col">
    <button type="submit" onClick={setdata} className="btn btn-primary" >Sign in</button>
  </div>
  {/* <div className="col-2">
    <button type="submit" className="btn btn-primary" onClick={Editdata}>Edit</button>
  </div>
  <div className="col-2">
    <button type="submit" className="btn btn-primary" onClick={deletedata}>delete</button>
  </div>
  <div className="col-2">
    <button type="submit" className="btn btn-primary" onClick={getdata}>getdata</button>
  </div> */}
</form>
    </div>

  );
}



// export default foo;

export default Signup
  // ser,

