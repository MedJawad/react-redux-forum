import React, { useState, useEffect } from "react";
import "../login.css";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../actions";
import { Redirect } from "react-router-dom";
import { BeatLoader } from "react-spinners";

function LoginPage() {

  //IN THE FIRST RENDER LETS CHECK FROM THE SERVER IF A USER IS ALREADY LOGGED IN
  useEffect(() => {
    dispatch(fetchUser({username : null,password:null,remember:null}));
    return () => {
    };
       // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
  
  const [formInfos, setFormInfos] = useState({
    username: "",
    password: "",
    remember: false
  });
  const dispatch = useDispatch();
  
  function handleChange(event) {
    const name = event.target.name;
    if (name==="remember") {
      setFormInfos({
        username : formInfos.username,
        password : formInfos.password,
        remember: !formInfos.remember
      });
    } else if(name==="username") {
      setFormInfos({
        username : event.target.value,
        password : formInfos.password,
        remember: formInfos.remember
      });
    }else if(name==="password"){
      setFormInfos({
        username : formInfos.username ,
        password : event.target.value,
        remember: formInfos.remember
        });
      }
    }

    let user = useSelector(state => state.loginUser);
    
    function handleSubmit(event) {
      event.preventDefault();
      dispatch(fetchUser(formInfos,user.sessionId));
    }
    let current = user.currentUser || null;
    let isFetching = useSelector(state => state.loginUser.isFetching);
    const beatloaderCSS ={
      width:"50%",
      margin : "20% auto auto auto;",
      textAlign : "center"
    }

    if( current ){
      // alert("User Found "+user);
      return (<Redirect to='/' />);
    }
    return (
      isFetching 
        ?(<React.Fragment>
          <span>.</span>
          <BeatLoader css={beatloaderCSS} color={"#11aabc"} size={50} loading={isFetching} margin={"auto"}/>
          </React.Fragment>
          )
        :(
        <div className="container" id="LoginContainer">
        <div className="d-flex justify-content-center h-100">
        <Card
        className="bg-dark text-white"
        style={{ height: "300px",margin : "50px auto" }}
        >
        <Card.Header>
            <h3>Sign In !</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formGroupUsername">
                <Form.Control
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                  value={formInfos.username|| ''}
                  onChange={handleChange}
                  />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formInfos.password|| ''}
                  onChange={handleChange}
                  />
              </Form.Group>
              <div className="row align-items-center remember">
                <FormControl
                  type="checkbox"
                  name="remember"
                  checked={formInfos.remember}
                  onChange={handleChange}
                  />
                Remember Me
              </div>
              <Button className="btn float-right login_btn" type="submit">
                Sign In !
              </Button>{" "}
            </Form>
          </Card.Body>
        </Card>
        </div>
        </div>
        )
        );
      }

export default LoginPage;
