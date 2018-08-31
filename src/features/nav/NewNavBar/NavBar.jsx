import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { Menu  } from 'semantic-ui-react';
import {  Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions'


import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline, Card, CardBody, Input } from 'mdbreact';
// import './ContactFormPage.css'

const actions = {
  openModal
}

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class NavBar extends Component {

  handleSignIn = () => {
    this.props.openModal('LoginModal')
  };

  handleRegister = () => {
    this.props.openModal('RegisterModal')
  }

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push('/')
  };

  constructor(props) {
    super(props),
    this.state = {
      collapse : false
    }
    this.onClick = this.onClick.bind(this);
    this.handleNavbarClick = this.handleNavbarClick.bind(this);
  }

  onClick(){
    this.setState({
        collapse: !this.state.collapse,
    });
  }

  handleNavbarClick(){
    this.setState({
      collapse: false
    });
  }

  
  render() {
    const overlay = <div id="sidenav-overlay" style={{backgroundColor: 'transparent'}} onClick={this.handleNavbarClick}/>
    const { auth, profile} = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty
    return (
    


<div id="contactformpage">
       
<div>
  <Navbar dark expand="md"  scrolling>
    <Container>
      
      <NavbarBrand>
      <NavLink  to="/" onClick={this.handleNavbarClick}> <strong className="black-text">COPENHAGEN CLINICAL</strong></NavLink>
      
      {/* <img src="/assets/logo.png" alt="logo" /> */}
     
       
      </NavbarBrand>

      <NavbarToggler className="right arrow icon" onClick = { this.onClick } />

      <Collapse isOpen = {this.state.collapse} navbar>
        <NavbarNav left>

        <div class="example rounded" >
        {!authenticated &&
          <NavItem active>
            <NavLink className="link"  to="/expertise" onClick={this.handleNavbarClick}>Expertise</NavLink>
          </NavItem>}
          </div>
          
          <div class="example rounded">
          {!authenticated &&
          <NavItem>
            <NavLink  className="link" to="/aboutus" onClick={this.handleNavbarClick}>About us</NavLink>
          </NavItem>}
          </div>  

           <div class="example rounded">
          {!authenticated &&
          <NavItem>
            <NavLink className="link" to="/events" onClick={this.handleNavbarClick}>Events</NavLink>
          </NavItem>}
          </div>  

          <div class="example rounded"> 
          {!authenticated &&
          <NavItem>
            <NavLink className="link" to="/contacts" onClick={this.handleNavbarClick}>Contact</NavLink>
          </NavItem>}
          </div>

       {/* <div class="example rounded"> 
          {authenticated &&
          <NavItem>
            <NavLink className="link" to="/createEvent" onClick={this.handleNavbarClick}>Create Event</NavLink>
          </NavItem>}
          </div> */}

            <div class="example rounded">
           {authenticated &&
          <NavItem>
            <NavLink className="link" to="/people" onClick={this.handleNavbarClick}>People</NavLink>
          </NavItem>}
          </div>

            <div class="example rounded">
           {authenticated &&
          <NavItem>
            <NavLink className="link" to="/settings" onClick={this.handleNavbarClick}>Data</NavLink>
          </NavItem>}
          </div>

            <div class="example rounded">
           {authenticated &&
           <NavItem>
           <NavLink className="link" to={`/profile/${auth.uid}`} onClick={this.handleNavbarClick}>Profile</NavLink>
         </NavItem>}
         </div>

          
          
        </NavbarNav>

          
          
        <NavbarNav right >
          <NavItem>
          {authenticated ? (
            <SignedInMenu  auth={auth} profile={profile} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu register={this.handleRegister} signIn={this.handleSignIn} />
          )}
          </NavItem>
        </NavbarNav>
      </Collapse>
    </Container>
  </Navbar>
{ this.state.collapse && overlay}
</div>


{/* <View>
<Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
  <Container>
    <Row>
      <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
        <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
        <hr className="hr-light"/>
        <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
        iste.</h6>
        <Button outline color="white">Learn More</Button>
      </div>
      <Col md="6" xl="5" className="mb-4">
        <Card className="dark-grey-text">
          <CardBody className="z-depth-2">
            <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
            <hr/>
            <Input label="Your name" icon="user"/>
            <Input label="Your email" icon="envelope"/>
            <Input label="Your message" icon="pencil" type="textarea" rows="3"/>
            <div className="text-center mt-3 black-text">
              <Button color="indigo">Send</Button>
              <hr/>
              <Input type="checkbox" id="checkbox" label="Subscribe me to the newsletter"/>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</Mask>
</View>

<Container>
<Row className="py-5">
  <Col md="12" className="text-center">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Col>
</Row>
</Container> */}
</div>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(NavBar)));
