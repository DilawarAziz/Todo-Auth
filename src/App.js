import {useState} from "react";
import "./App.css";
import Header from "./components/Header";
// import {db} from  'firebase'
import Signup from './components/signup';
import {connect} from 'react-redux'
import foo from './container/action/action'
import Profile from './components/profile'

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Routes
 
// } from "react-router-dom";
 function App() {

const [user, setuser] = useState(false)

//   const porfilefoo = () => {
//     return (dispatch) => {
//       dispatch({
//         type: "GETDATA",
//         payload: {  },
//       });
//     };
//   }
  let getUser=(a)=>{
    setuser(a)
    // console.log(a.)
  }
    // console.log(this.props)
    return (
    
  //  <Router>
      <div>
      
    <Signup getUser={getUser}/>
       {user&& <Profile user={user}/>}
      {/* <Switch>
          <Route path="/Signup">

          </Route>
          <Route path="/Profile">
   
          </Route>
          {/* <Route path="/">
         
          </Route> */}
        {/* </Switch> */} 
  
      </div>
    // </Router>
 
    );
  }


const mapStateToProps = (state)=>({
  users :state.users,
  name:state.name
})
const mapDispatchToProps = (dispatch)=>({
  foo :()=>dispatch(foo())

})
export default connect(mapStateToProps,mapDispatchToProps)( App);
