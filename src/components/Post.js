import React from 'react';
import {Card, Button,Dropdown,Col,Row,Image} from 'react-bootstrap';

class Post extends React.Component{

    render(){
        return(
            <Card bg="light" style={{ width: '50rem',margin : 'auto' }}>
                <Card.Header border="light"> <Row>
                   <Col xs lg="3"> <Card.Link href="#" >r/Subredits</Card.Link>   </Col> 
                   <Col xs lg="6"></Col>
                   <Col xs lg="3"> <Button variant="primary">+ Join</Button>    </Col></Row>
                </Card.Header>
                <Card.Body>
                <Card.Text>
                    {this.props.title}
                </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Row>
                        <Col xs lg="4"> 
                            <Button variant="light">
                                <i className="fas fa-comment-alt"></i>
                                177 commentes
                            </Button> 
                        </Col>
                        <Col xs lg="2"> 
                            <Image src="holder.js/171x180" rounded/>
                            <Button variant="light">Share</Button> 
                        </Col>
                        <Col xs lg="2"> 
                            <Image src="holder.js/171x180" rounded/>
                            <Button variant="light">Save</Button>   
                        </Col>
                        <Col xs lg="4"> <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic">...</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">
                                    <Image src="holder.js/171x180" rounded/>
                                        Hide</Dropdown.Item>
                                    <Dropdown.Item href="#">
                                    <Image src="holder.js/171x180" rounded/>
                                        Report</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> 
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        );
    }

}
export default Post;