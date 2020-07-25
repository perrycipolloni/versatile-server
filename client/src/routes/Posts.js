import React from 'react';
import Container from 'react-bootstrap/Container'

class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wp_title: '',
            wp_content: '',
        }
    }

    componentDidMount() {
        
    }

    render() {
        fetch('http://versatileco.me/wp-json/wp/v2/posts/22')
            .then(response => response.json())
            // .then(posts => console.log(posts))
            .then(posts => this.setState({
                wp_title:posts.title.rendered,
                wp_content:posts.content.rendered 
            }))
        
        return (
            <Container className="section">
                
               <h2>{this.state.wp_title} </h2>
               <p>{this.state.wp_content} </p>

               
                
            </Container>

        )
    }
}

export default Posts;