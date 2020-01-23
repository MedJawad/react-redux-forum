import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.getTimeDiff = this.getTimeDiff.bind(this);
  }

  getTimeDiff = () => {
    let postTime = new Date(this.props.time);
    let now = new Date();
    let milliseconds = now - postTime;
    let seconds = milliseconds / 1000;

    if (seconds < 60) {
      return Math.floor(seconds) + "s";
    } //Seconds
    if (seconds < 60 * 60) {
      return Math.floor(seconds / 60) + "min";
    } //Minutes
    if (seconds < 60 * 60 * 24) {
      return Math.floor(seconds / (60 * 60)) + "h";
    } //Hours
    if (seconds < 60 * 60 * 24 * 30) {
      return Math.floor(seconds / (60 * 60 * 24)) + "day";
    } //Days
    if (seconds < 60 * 60 * 24 * 30 * 12) {
      return Math.floor(seconds / (60 * 60 * 24 * 30)) + "months";
    } //Months
    return Math.floor(seconds / 60 / 12) + "Years"; // Years
  };

  render() {
    return (
      <Card
        bg="info"
        text="white"
        style={{ width: "100%", margin: "30px auto 30px auto" }}
      >
        <Link
          to={`/post/${this.props.id}`}
          style={{ color: "white", fontWeight: "bold", textDecoration: "none" }}
        >
          <Card.Header as="h5">
            {this.props.groupName
              ? "g/" + this.props.groupName
              : "u/" + this.props.user.username}
            <Link
              to={`/user/${this.props.user.id}`}
              style={{
                color: "white",
                fontWeight: "bold",
                textDecoration: "none"
              }}
            >
              <sub>
                {" "}
                Posted By <b>{this.props.user.username}</b> {this.getTimeDiff()} ago
              </sub>
            </Link>
          </Card.Header>
        </Link>
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
