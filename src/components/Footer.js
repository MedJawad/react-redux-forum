import React from 'react';
import {
    Card,
    Button    } from 'react-bootstrap';

class Footer extends React.Component {


    render(){
        return (
            <Card className="text-center absolute-bottom">

                <Card.Body>
                    <Card.Title><span role="img" aria-label="Oups">🤷‍♂️</span> You've reached the end of current articles <span role="img" aria-label="Oups">🤷‍♂️</span></Card.Title>
                    <Card.Text>
                        Follow More Rooms To get To see more amazing stuff on ForUs.
                    </Card.Text>
                    <Button variant="primary">Go to Top</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Footer;