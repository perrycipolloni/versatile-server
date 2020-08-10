import React from 'react';
import Container from 'react-bootstrap/Container'
import headshot from '../images/chasealex.jpg'
import Spotify from './Spotify'

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wp_title: '',
            wp_content: '',
        }
    }

   
    render() {
        fetch('https://versatileco.me/wp-json/wp/v2/posts/35')
        .then(response => response.json())
        // .then(posts => console.log(posts))
        .then(posts => this.setState({
            wp_title:posts.title.rendered,
            wp_content:posts.content.rendered
        }))

        return (
           <Container>
               <br />
               <br />
                <h2>{this.state.wp_title}</h2>
                <img src={headshot} alt="Chase Alex" />
                {/* <p>{this.state.wp_content}</p> */}
                <div dangerouslySetInnerHTML={{ __html:this.state.wp_content }} />

                <Spotify />
       
           </Container>
        )
    }
}

export default Review;