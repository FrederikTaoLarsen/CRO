import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withFirebase } from 'react-redux-firebase'
import { Form, Input,Menu, Container, Button } from 'semantic-ui-react';
import { NavLink, Link, withRouter } from 'react-router-dom';
import SignedOutMenu from '../Menus/SignedOutMenu';
import SignedInMenu from '../Menus/SignedInMenu';
import { openModal } from '../../modals/modalActions'
import {  Footer, Row,Col } from 'mdbreact';

const actions = {
  openModal
}

const Email =  { send: function (e, o, t, n, a, s, r, c) { var d = Math.floor(1e6 * Math.random() + 1), i = "From=" + e; i += "&to=" + o, i += "&Subject=" + encodeURIComponent(t), i += "&Body=" + encodeURIComponent(n), void 0 == a.token ? (i += "&Host=" + a, i += "&Username=" + s, i += "&Password=" + r, i += "&Action=Send") : (i += "&SecureToken=" + a.token, i += "&Action=SendFromStored", c = a.callback), i += "&cachebuster=" + d, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", i, c) }, sendWithAttachment: function (e, o, t, n, a, s, r, c, d) { var i = Math.floor(1e6 * Math.random() + 1), m = "From=" + e; m += "&to=" + o, m += "&Subject=" + encodeURIComponent(t), m += "&Body=" + encodeURIComponent(n), m += "&Attachment=" + encodeURIComponent(c), void 0 == a.token ? (m += "&Host=" + a, m += "&Username=" + s, m += "&Password=" + r, m += "&Action=Send") : (m += "&SecureToken=" + a.token, m += "&Action=SendFromStored"), m += "&cachebuster=" + i, Email.ajaxPost("https://smtpjs.com/v2/smtp.aspx?", m, d) }, ajaxPost: function (e, o, t) { var n = Email.createCORSRequest("POST", e); n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.onload = function () { var e = n.responseText; void 0 != t && t(e) }, n.send(o) }, ajax: function (e, o) { var t = Email.createCORSRequest("GET", e); t.onload = function () { var e = t.responseText; void 0 != o && o(e) }, t.send() }, createCORSRequest: function (e, o) { var t = new XMLHttpRequest; return "withCredentials" in t ? t.open(e, o, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, o) : t = null, t } }

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class FooterNav extends Component {
    sendMail = () => {
        Email.send("frederiktaodybdallarsen@gmail.com",
        "frederiktaodybdallarsen@gmail.com",
        "This is a subject",
        "this is the body",
        "smtp.yourisp.com",
        "frederiktaodybdallarsen@gmail.com",
        "lisbeth123");
    }

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

  render() {
    const { auth, profile} = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty
    return (

        
      <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">




      <Container fluid className="text-center text-md-left">
   
          <Row className="text-center text-md-left mt-3 pb-3">
              <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                  <p>WHAT you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p><a href="#!">MDBootstrap</a></p>
                  <p><a href="#!">MDWordPress</a></p>
                  <p><a href="#!">BrandFlow</a></p>
                  <p><a href="#!">Bootstrap Angular</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
                  <p><a href="#!">Your Account</a></p>
                  <p><a href="#!">Become an Affiliate</a></p>
                  <p><a href="#!">Shipping Rates</a></p>
                  <p><a href="#!">Help</a></p>
              </Col>
              <hr className="w-100 clearfix d-md-none"/>
              <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fa fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fa fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fa fa-print mr-3"></i> + 01 234 567 89</p>
              </Col>
          </Row>
          <hr/>
          <Row className="d-flex align-items-center">
              <Col md="8" lg="8">
                  <p className="text-center text-md-left grey-text">&copy; {(new Date().getFullYear())} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a></p>
              </Col>
              <Col md="4" lg="4" className="ml-lg-0">
                  <div className="text-center text-md-right">
                      <ul className="list-unstyled list-inline">
                          <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-facebook"></i></a></li>
                          <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-twitter"></i></a></li>
                          <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-google-plus"></i></a></li>
                          <li className="list-inline-item"><a className="btn-floating btn-sm rgba-white-slight mx-1"><i className="fa fa-linkedin"></i></a></li>
                      </ul>

                        
                  </div>
              </Col>
          </Row>
      </Container>

  </Footer>
    );
  }
}

export default withRouter(withFirebase(connect(mapState, actions)(FooterNav)));
