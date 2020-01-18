import React from 'react';
import {
    Navbar , 
    Form,
    FormControl,
    Button    } from 'react-bootstrap';
    import { useDispatch } from "react-redux";
import { searchFilter , logout } from '../actions';

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