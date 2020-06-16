import React, { Component } from 'react';
// import logo from './tone150.png';
// import video from './logoDrawOn.mp4'
// import Container from 'react-bootstrap/Container'
import './App.css';
import CoverVDO from './components/CoverVDO';
// import Story from './components/Story';
// import Vendors from './routes/vendors';
// import Contact from './routes/contact';
// import VideoBackground from './components/VideoBackground';
// import { Link } from 'react-router';
// import { 
//   NavLink,
// } from 'react-router-dom';


// NOTE: App.js is currently placed in the scaffold like a controller, whereas the other components are in the routes directory. How do I want App.js to behave in relation to the other components?
// TODO: API scrolling 
// FIXME: Performance issues with logo

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
 
render() {
    return (
      <div className="App">
        {/* <header className="App-header">
            <video src={video} autoPlay muted loop style={{
              type: 'video/mp4',
              objectFit: 'cover',
              overflow: 'hidden',
              width: '100vw',
              height: '100vh',
              }} />
        </header> */}
        <CoverVDO />
            
        {/* <Container>
          <Story />
          <Vendors />
          <Contact />
        </Container> */}

      </div>
    );
  }
}

export default App;