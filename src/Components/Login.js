import React , {useState} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link} from "react-router-dom";
import {useHistory} from 'react-router-dom';

const Login = () => {
const history=useHistory();
//   const [fullName,setFullName]=useState({
//     email:"",
//     password:"",
//   });

//   const inputEvent = (event)=>{
// console.log(event.target.value);
// console.log(event.target.name);

// const {name,value}=event.target;

// setFullName((preValue)=>{

// })
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("")
  // const [emailError, setemailerror] = useState(null)
  // const [passwordError, setPassworderror] = useState(null);
  

  const signIn = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3030/api/v1.0/auth/login`, { email: email, password: password })
      .then(response => {
        if (response.data.error) {
          alert("invalid");
          return;
          // history.push("/welcome");
        }
        // else{
         

        // }
        console.log(response)
        Cookies.set('Token',response.data.token,{expires:1});
        history.replace('/welcome');
        // if (response.status===200) {
        //   history.push("/welcome");
        // }
       
        // else{
        //   alert("invalid");
        //   return;
        // }
        console.log(response)
        
      }
      )
  }
      
    // var check = true;
    // if (email === "") {
    //   setemailerror("Required");
    //   check = false;
    // }
    // if (password === "") {
    //   setPassworderror("Required");


    //   check = false;
    // }
    

    // axios
    //   .post(`${BASE_URL}/api/v1.0/auth/login`, { email: email, password: password })
    //   .then(response => {
    //     if (response.data.error) {
    //       alert("invalid");
    //       return;
    //     }
    return (
        <>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Log In</h2>
          
          <Form onSubmit={signIn}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}
 required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
required />
            </Form.Group>
            <Button  className="w-100" type="submit">
              Log In
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    </>
    )
}

export default Login
