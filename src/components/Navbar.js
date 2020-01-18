import React from 'react';
import {
    Navbar , 
    Nav ,
    Form,
    FormControl,
    Button    } from 'react-bootstrap';
    import { useSelector , useDispatch } from "react-redux";
import { searchFilter , logout } from '../actions';
import { Redirect } from 'react-router-dom';


function NavBar(){

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(searchFilter(event.target.value));
    }
    function handleLogout(event) {
        event.preventDefault();
        dispatch(logout());
    }

        return (
            <Navbar bg="info" variant="dark">
                <Navbar.Brand href="#home">ForUs</Navbar.Brand>
                <Form className="col-sm-8 m-auto">
                    <FormControl type="text" placeholder="Search In ForUs" className="mr-sm-2 text-center" onChange={handleChange}/>
                </Form>
                <Form inline className="ml-auto" onSubmit={handleLogout}>
                    <Button type="submit" variant="outline-light"  className="mr-sm-2">Logout</Button>
                </Form>
            </Navbar>
        );
}

export default NavBar;