import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, Mask, Row, Col, Fa, Button, View, Container, FormInline, Card, CardBody, Input } from 'mdbreact';
import {  Badge} from 'mdbreact';


const HomePage = ({history}) => {
  const newsStyle={borderBottom: '1px solid #e0e0e0', marginBottom: '1.5rem'}
 
  
  return (
  
//     <div id="contactformpage"> 
//      <View>
// <Mask className="d-flex justify-content-center align-items-center" overlay="indigo-strong">
//   <Container>
//     <Row>
//       <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
//         <h1 className="display-4 font-weight-bold">Lorem ipsum </h1>
//         <hr className="hr-light"/>
//         <h6 className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt
//         dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae
//         iste.</h6>
//         <Button outline color="white">Learn More</Button>
//       </div>
//       <Col md="6" xl="5" className="mb-4">
//         <Card className="dark-grey-text">
//           <CardBody className="z-depth-2">
//             <h3 className="dark-grey-text text-center"><strong>Write to us:</strong></h3>
//             <hr/>
//             <Input label="Your name" icon="user"/>
//             <Input label="Your email" icon="envelope"/>
//             <Input label="Your message" icon="pencil" type="textarea" rows="3"/>
//             <div className="text-center mt-3 black-text">
//               <Button color="indigo">Send</Button>
//               <hr/>
//               <Input type="checkbox" id="checkbox" label="Subscribe me to the newsletter"/>
//             </div>
//           </CardBody>
//         </Card>
//       </Col>
//     </Row>
//   </Container>
// </Mask>
// </View>

// <Container>
// <Row className="py-5">
//   <Col md="12" className="text-center">
//     <p>
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//     </p>
//   </Col>
// </Row>
// </Container>
// </div>

<div>



  <Container style={{maxWidth: '80%'}}>


      <h2 className="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
      <Row>
        <Col lg="6" md="12">
          <div style={newsStyle}>
            <View hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/82.jpg" alt="Sample image"/>
              <a>
                <Mask overlay="white-slight" className="waves-light"/>
              </a>
            </View>
            <div className="d-flex justify-content-between">
              <a className="light-blue-text"><h6 className="font-weight-bold"><Fa icon="plane" className="pr-2"/>Travels</h6></a>
              <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>20/08/2018</p>
            </div>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
            <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.</p>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/photo8.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">19/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/54.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">18/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mb-4">
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">17/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Voluptatem accusantium doloremque</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg="6" md="12">
          <div style={newsStyle}>
            <View hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
              <a>
                <Mask overlay="white-slight" className="waves-light"/>
              </a>
            </View>
            <div className="d-flex justify-content-between">
              <a className="pink-text"><h6 className="font-weight-bold"><Fa icon="home" className="pr-2"/>Lifestyle</h6></a>
              <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>24/08/2018</p>
            </div>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
            <p className="dark-grey-text">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">23/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/48.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">22/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mb-4">
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(56).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">21/08/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Maiores alias consequatur aut perferendis</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>

    {/* SECOND */}

<Container>

      <h2 className="h1-responsive font-weight-bold text-center my-5">Recent posts</h2>
      <p className="text-center w-responsive mx-auto mb-5">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Row>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"/>
            <Mask overlay="white-slight"/>
          </View>
          <a className="pink-text"><h6 className="font-weight-bold mb-3">
          <Fa icon="map" className="pr-2"></Fa>Adventure</h6></a>
          <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
          <p>by <a className="font-weight-bold">Billy Forester</a>, 15/07/2018</p>
          <p className="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus voluptas.</p>
          <Button color="pink" rounded size="md">Read more</Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
        <View hover className="rounded z-depth-2 mb-4" waves>
          <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"/>
          <Mask overlay="white-slight"/>
        </View>
          <a className="deep-orange-text"><h6 className="font-weight-bold mb-3">
          <Fa icon="graduation-cap" className="pr-2"></Fa>Education</h6></a>
          <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
          <p>by <a className="font-weight-bold">Billy Forester</a>, 13/07/2018</p>
          <p className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis voluptatum deleniti atque corrupti quos dolores.</p>
          <Button color="deep-orange" rounded size="md">Read more</Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
        <View hover className="rounded z-depth-2 mb-4" waves>
          <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/13.jpg"/>
          <Mask overlay="white-slight"/>
        </View>
          <a className="blue-text"><h6 className="font-weight-bold mb-3">
          <Fa icon="fire" className="pr-2"></Fa>Culture</h6></a>
          <h4 className="font-weight-bold mb-3"><strong>Title of the news</strong></h4>
          <p>by <a className="font-weight-bold">Billy Forester</a>, 11/07/2018</p>
          <p className="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione.</p>
          <Button color="info" rounded size="md">Read more</Button>
        </Col>
      </Row>
    </Container>

    {/* THIRD */}

    <Container style={{maxWidth: '80%'}}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
      <Row>
        <Col md="12" lg="6">
          <div className="mb-4">
            <View hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Slides/1.jpg" alt="Sample image"/>
              <a>
                <Mask overlay="white-slight" className="waves-light"/>
              </a>
            </View>
            <div className="d-flex justify-content-between">
              <a className="deep-orange-text"><h6 className="font-weight-bold"><Fa icon="cutlery" className="pr-2"/>Culinary</h6></a>
              <p className="font-weight-bold dark-grey-text"><Fa icon="clock-o" className="pr-2"/>27/02/2018</p>
            </div>
            <h3 className="font-weight-bold dark-grey-text mb-3 p-0"><a>Title of the news</a></h3>
            <p className="dark-grey-text mb-lg-0 mb-md-5 mb-4">Sed ut perspiciatis unde voluptatem omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae explicabo. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</p>
          </div>
        </Col>

        <Col md="12" lg="6">
          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">26/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">25/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Itaque earum rerum hic tenetur a sapiente delectus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div style={newsStyle}>
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">24/03/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Soluta nobis est eligendi optio cumque nihil impedit quo minus</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

          <div className="mb-4">
            <Row>
              <Col md="3">
                <View hover rounded className="z-depth-1-half mb-4">
                  <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg" alt="Sample image"/>
                  <a>
                    <Mask overlay="white-slight" className="waves-light"/>
                  </a>
                </View>
              </Col>
              <Col md="9">
                <p className="font-weight-bold dark-grey-text">23/02/2018</p>
                <div className="d-flex justify-content-between">
                  <Col size="11" className="text-truncate pl-0 mb-3">
                    <a className="dark-grey-text">Duis aute irure dolor in reprehenderit in voluptate</a>
                  </Col>
                  <a><Fa icon="angle-double-right"/></a>
                </div>
              </Col>
            </Row>
          </div>

        </Col>
      </Row>
    </Container>

    {/* FOURTH */}

    <Container style={{maxWidth: '80%'}}>
      <h2 className="h1-responsive font-weight-bold my-5 text-center">Section title</h2>
      <p className="dark-grey-text mx-auto mb-5 w-75 text-center">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit id laborum.</p>
      <Row>
        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/86.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="pink"><Fa icon="camera" className="pr-2" aria-hidden="true"/>Adventure</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>24 Food Swaps That Slash Calories.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to Make a Beet Cocktail?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>8 Sneaky Reasons You're Always Hungry.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>5 Pressure Cooker Recipes You Need to Try.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/31.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="deep-orange"><Fa icon="plane" className="pr-2" aria-hidden="true"/>Travel</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Trends in the blogosphere for 2018.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Where can you eat the best lunch in Warsaw?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>What camera is worth taking for holidays?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Why should you visit Lisbon?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>

        <Col md="12" lg="4" className="mb-lg-0 mb-5">
          <View hover rounded className="z-depth-1-half mb-4">
            <img className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg" alt="Sample image"/>
            <a>
              <Mask overlay="white-slight" className="waves-light"/>
            </a>
          </View>
          <Row className="mb-3">
            <Col size="12">
              <a><Badge color="success"><Fa icon="leaf" className="pr-2" aria-hidden="true"/>Nature</Badge></a>
            </Col>
          </Row>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a className="font-weight-bold">This is title of the news</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to recognize the footsteps of wild animals?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>National Parks in Poland.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between" style={newsStyle}>
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>Traveling without littering the planet.</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
          <div className="d-flex justify-content-between mb-4">
            <Col size="11" className="text-truncate pl-0 mb-3">
              <a>How to protect rainforests?</a>
            </Col>
            <a><Fa icon="angle-double-right"/></a>
          </div>
        </Col>
      </Row>
    </Container>
</div>

  );
};

export default HomePage;
