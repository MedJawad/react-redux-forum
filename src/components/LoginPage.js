import React, { useState } from "react";
import "../login.css";
import { Form, FormControl, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { handleLogin } from "../actions";

function LoginPage() {
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
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(handleLogin(formInfos));
  }
  return (
    <div className="container" id="LoginContainer">
      <div className="d-flex justify-content-center h-100">
        <Card
          className="bg-dark text-white"
          style={{ margin: "30px auto 30px auto" }}
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
  );
}

export default LoginPage;
