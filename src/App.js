import './App.css';
import {Route,Switch} from "react-router-dom";
import { Container } from "react-bootstrap"
import Home from "./Components/Home";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import ForgetPassword from "./Components/ForgetPassword";
import Welcome from "./Components/Welcome";

function App() {
  
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
    <Switch>
      <Route exact path="/" render={()=>{ return (<Home/>);}}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/signup' component={SignUp}/>
      <Route exact path='/welcome' component={Welcome}/>
      <Route exact path='/forgot-password' component={ForgetPassword}/>

    </Switch>
    </div>
    </Container>
  );
}

export default App;
