import React from "react";
import { Card, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Comment = props => {
    //,backgroundColor: "#1ab2ff"
  return (
    <div>
      <Card
        bg="info"
        text="white"
        style={{ width: "98%", margin: "30px auto 30px auto" }}
      >
        
        <Card.Body> 
        <Link to={`/user/${props.user.id}`} style={{color : "white" ,fontWeight : "bold", textDecoration:"none"}}>
            u/{props.user.username||"undefined"} {getTimeDiff(props.time)} ago
        </Link>
        <Card.Text>{props.text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Button variant="light" className="m-1">
              {props.votes} <FontAwesomeIcon icon="thumbs-up" />
            </Button>
            <Button variant="light" className="m-1">
              165 <FontAwesomeIcon icon="comment" />
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

const getTimeDiff = (time) => {
    let postTime = new Date(time);
    let now = new Date();
    let milliseconds = now - postTime ;
    let seconds = milliseconds / (1000)

    if(seconds<60){ return Math.floor(seconds)+"s";} //Seconds
    if(seconds< 60*60 ){ return Math.floor(seconds/(60) )+"min";} //Minutes
    if(seconds< 60*60*24){   return Math.floor(seconds / (60*60))+"h";} //Hours
    if(seconds< 60*60*24*30){    return Math.floor(seconds / (60*60*24))+"day";} //Days
    if(seconds< 60*60*24*30*12){  return Math.floor(seconds / (60*60*24*30))+"months";} //Months
    return Math.floor(seconds / (60)/12)+"Years"; // Years
  }
  

export default Comment;
