import React from 'react';
import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
import Contact from '../routes/contact'

class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wp_title: '',
            wp_content: '',
        }
    }

    render() {
        fetch('https://versatileco.me/wp-json/wp/v2/posts/28')
        .then(response => response.json())
        // .then(posts => console.log(posts))
        .then(posts => this.setState({
            wp_title:posts.title.rendered,
            wp_content:posts.content.rendered 
        }))
    
        return (
            
            <Container className="section">
                {/* <h2>Versatile Tone Group</h2>
                <p>TONE is a creative, safe haven for artists looking to take their career to the next level. Co-founded in 2020 by Daniel Kontoh-Boateng, Kwame Twum-Barima, and Evangelos Mines, the vision of the group is channeling energy, creative vision, and striving to cultivate family-like relationships with our clients that empowers the full spectrum of their creativity and unique artist brands without any alteration influenced by "demands" of the entertainment world. We proudly say, SET YOUR TONE, and we’ll do the WORK.</p>       */}
                <h2>{this.state.wp_title} </h2>
                <p>{this.state.wp_content} </p>
                
                <div className="">
                    <Contact />
                </div>
            </Container>
        )
    }
}

export default About;