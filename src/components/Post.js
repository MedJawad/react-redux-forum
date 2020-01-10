import React from "react";
import { Card, Button, Dropdown, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends React.Component {
  render() {
    return (
        <Card bg="info" text="white" style={{ width: '50rem' , margin: '30px auto 30px auto' }}>
        <Card.Header as="h5">
            Group <sub>Posted By <b>username</b> 8h ago</sub>
        </Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Button variant="light" className="m-1">
              {this.props.votes} <FontAwesomeIcon icon="thumbs-up" />
            </Button>
            <Button variant="light" className="m-1">
              165 <FontAwesomeIcon icon="comment" />
            </Button>
            <Button variant="light" className="ml-auto">
                Share <FontAwesomeIcon icon="share" />
                </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  }
}
export default Post;
