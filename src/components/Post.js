import React from "react";
import { Card, Button, Dropdown, Col, Row, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Post extends React.Component {
  render() {
    return (
        <Card bg="info" text="white" style={{ width: '50rem' , margin: 'auto' }}>
        <Card.Header as="h5">
            username <span>g/idiots</span>
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
