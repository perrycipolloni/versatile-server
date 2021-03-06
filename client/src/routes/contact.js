import React from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button'
// import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

// NOTE: contact.js handles server-side POST requests. This might be the CTA: Contact directly.
// TODO: Round trip the POST request

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wp_title: '',
            wp_content: '',
        }
    }
    
    render() {
        fetch('https://versatileco.me/wp-json/wp/v2/posts/30')
        .then(response => response.json())
        // .then(posts => console.log(posts))
        .then(posts => this.setState({
            wp_title:posts.title.rendered,
            wp_content:posts.content.rendered 
        }))
    
        return (
            <Container className="section">
                
                <br />
                {/* <h2>Contact Tone</h2>
                <p>For any questions or inquiries, feel free to reach us here:</p> */}
                <h2>{this.state.wp_title} </h2>
                <p>{this.state.wp_content} </p>

                {/* MAILTO */}
                <h3 className="email" ><a href="mailto:info@versatileco.me">info@versatileco.me</a></h3>
                    {/* <Form>
                    <Form.Label>Name</Form.Label>
                        <Form.Row>
                            
                            <Col>
                            <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                            <Form.Control placeholder="Last name" />
                            </Col>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="What's your email?" />
                            </Form.Group>
                        </Form.Row>

                        <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control as="textarea" placeholder="How can we help you?" rows="3"/>
                            </Form.Group>
                        </Form.Row>

                        <Button variant="secondary" type="submit">
                            Submit
                        </Button>
                    </Form> */}
                

                {/* Add space */}
               
                <br />
                
            </Container>

        )
    }
}

export default Contact;