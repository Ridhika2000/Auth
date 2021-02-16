import React , {useState} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import {Form,Button,Card} from 'react-bootstrap';
import { Link,useHistory} from "react-router-dom"
const SignUp = () => {
  const history=useHistory();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfmpassword,setcnfmpassword]=useState("");

  const signUp = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:3030/api/v1.0/auth/signup`, { email: email, password: password , cnfmpassword:cnfmpassword})
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


        
      }
      )
  }
    return (
        <>
        <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign Up</h2>
          
          <Form onSubmit={signUp}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={email} onChange={(e) => setemail(e.target.value)}required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}required />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" name="cnfmpassword" value={cnfmpassword} onChange={(e)=>setcnfmpassword(e.target.value)} required />
            </Form.Group>
            <Button  className="w-100" type="submit">
              Sign Up
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
    </>
    )
}

export default SignUp
