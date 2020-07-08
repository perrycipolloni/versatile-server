import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Route, 
  NavLink,
  // Link,
  Switch,
  BrowserRouter as Router 
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './custom.scss'; 
import App from './App';
import Footer from './components/Footer'
import Media from './routes/media';
import Clients from './routes/clients';
import About from './routes/About';
import Contact from './routes/contact';
import Notfound from './notfound';
import * as serviceWorker from './serviceWorker';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse';
// import gsap from 'gsap'

// const tweenComplete = () => {
//   return NavbarCollapse
// } 

const routing = (
  <Router>
      <div className="navbar-container">

        <Navbar collapseOnSelect className="navbar-dark" expand="none" bg="dark">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav onClick={NavbarCollapse} className="mr-auto" >  
            {/* <Nav onClick={() => gsap.from(".circle", {ease:"bounce", scale: 0.5, onComplete: "NavbarCollapse" , duration: 1, x: -14})} className="mr-auto" >   */}

              {/* <Nav.Item onClick={() => gsap.from(".circle1", {ease:"bounce", scale: 0.5, duration: 1, x: -14}) }  className="circle1"> */}
              <Nav.Item className="circle" >
                <NavLink className="nav-link" exact activeClassName="active" to="/">
                  Tone
                </NavLink>         
              </Nav.Item>
             
              {/* <Nav.Item onClick={() => gsap.from(".circle2", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle2"> */}
              <Nav.Item className="circle" >
                <NavLink className="nav-link" activeClassName="active" to="/clients">
                  Clients
                </NavLink>         
              </Nav.Item>

              {/* <Nav.Item onClick={() => gsap.from(".circle3", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle3"> */}
              <Nav.Item className="circle" >
                <NavLink className="nav-link" activeClassName="active" to="/media">
                  Media
                </NavLink>         
              </Nav.Item>

              {/* <Nav.Item onClick={() => gsap.from(".circle4", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle4"> */}
              <Nav.Item className="circle" >
                <NavLink className="nav-link" activeClassName="active" to="/about">
                  About
                </NavLink>         
              </Nav.Item>

              {/* <Nav.Item onClick={() => gsap.from(".circle5", {ease:"bounce", scale: 0.5, duration: 1, x: -14})}  className="circle5"> */}
              <Nav.Item className="circle" >
                <NavLink className="nav-link" activeClassName="active" to="/contact">
                  Contact
                </NavLink>         
              </Nav.Item>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </div> 
    
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/clients/:id" component={Clients} />
        <Route path="/clients" component={Clients} />
        <Route path="/media" component={Media} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} />
      </Switch> 

      <Footer />

  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();






