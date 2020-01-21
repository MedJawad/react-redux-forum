import React from 'react';
import {
    Navbar , 
    Form,
    FormControl,
    Button    } from 'react-bootstrap';
import { useDispatch , useSelector} from "react-redux";
import { Link } from "react-router-dom";
import { searchFilter , logout } from '../actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                <Link to="/" className="ml-auto" style={{color : "white" ,fontWeight : "bold", textDecoration:"none"}}>
                    <FontAwesomeIcon icon="user-alt" /> u/{useSelector(state => state.loginUser.currentUser.username)}
                </Link>
                <Form inline className="ml-auto" onSubmit={handleLogout}>
                    <Button type="submit" variant="outline-light"  className="mr-sm-2">Logout</Button>
                </Form>
            </Navbar>
        );
}

export default NavBar;