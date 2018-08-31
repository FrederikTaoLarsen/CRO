import React from 'react';
import { Input, Form,Container, Row, Col, Card, CardBody, Mask, Fa, View, Button} from 'mdbreact';


const AboutPage = ({history}) => {
  return (

    <div>

    
 

      {/* First */}
       <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col md="4">
              <Fa icon="area-chart" size="3x" className="red-text"/>
              
              <h5 className="font-weight-bold my-4">Analytics</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="book" size="3x" className="cyan-text"/>
              <h5 className="font-weight-bold my-4">Tutorials</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
            <Col md="4">
              <Fa icon="comments-o" size="3x" className="orange-text"/>
              <h5 className="font-weight-bold my-4">Support</h5>
              <p className="grey-text mb-md-0 mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores aperiam minima assumenda deleniti hic.</p>
            </Col>
          </Row>
        </section>
                
 
      </Container>

          {/* SECOND */}
    
    <Container>
      <Row>
        <Col md="12">
          <Card reverse>
            <View cascade hover waves>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(142).jpg" className="img-fluid"/>
              <Mask overlay="white-slight" className="waves-light"/>
            </View>
            <CardBody cascade className="text-center">
              <h2 className="font-weight-bold"><a>Title of the news</a></h2>
              <p>Written by <a><strong>Abby Madison</strong></a>, 26/08/2018</p>
              <Button className="btn-fb waves-light">
                <Fa icon="facebook" className="pr-2"></Fa>
                Facebook
              </Button>
              <span className="counter">46</span>
              <Button className="btn-tw waves-light">
                <Fa icon="twitter" className="pr-2"></Fa>
                Twitter
              </Button>
              <span className="counter">22</span>
              <Button className="btn-gplus waves-light">
                <Fa icon="google-plus" className="pr-2"></Fa>
                Google
              </Button>
              <span className="counter">31</span>
              <Button color="default" className="waves-light">
                <Fa icon="comments" className="pr-2"></Fa>
                Comments
              </Button>
              <span className="counter">18</span>
            </CardBody>
          </Card>
          <Container className="mt-5">
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa nemo enim ipsam voluptatem quia voluptas sit qui officia deserunt mollitia animi, id est laborum et dolorum fuga quidem rerum facilis est distinctio.
            </p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.
            </p>
          </Container>
        </Col>
      </Row>
      <hr className="mb-5 mt-4"/>
      <Row>
        <Col md="12">
          <Card reverse>
            <View cascade hover waves>
              <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(146).jpg" className="img-fluid"/>
              <Mask overlay="white-slight" className="waves-light"/>
            </View>
            <CardBody cascade className="text-center">
            <h2 className="font-weight-bold"><a>Title of the news</a></h2>
              <p>Written by <a><strong>Abby Madison</strong></a>, 21/08/2018</p>
                <Button className="btn-fb waves-light">
                  <Fa icon="facebook" className="pr-2"></Fa>
                  Facebook
                </Button>
                <span className="counter">87</span>
                <Button className="btn-tw waves-light">
                  <Fa icon="twitter" className="pr-2"></Fa>
                  Twitter
                </Button>
                <span className="counter">73</span>
                <Button className="btn-gplus waves-light">
                  <Fa icon="google-plus" className="pr-2"></Fa>
                  Google
                </Button>
                <span className="counter">91</span>
                <Button color="default" className="waves-light">
                  <Fa icon="comments" className="pr-2"></Fa>
                  Comments
                </Button>
                <span className="counter">67</span>
            </CardBody>
          </Card>
          <Container className="mt-5">
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
            </p>
            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
            </p>
          </Container>
        </Col>
      </Row>
    </Container>

         {/* Third */}

      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="bullhorn" size="2x" className="blue-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Marketing</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="primary" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="cogs" size="2x" className="pink-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Customization</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="pink" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="md-0 mb-5">
              <Row>
                <Col lg="2" md="3" size="2">
                  <Fa icon="dashboard" size="2x" className="purple-text"/>
                </Col>
                <Col lg="10" md="9" size="10">
                  <h4 className="font-weight-bold">Support</h4>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <Button color="purple" size="sm">Learn more</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

{/* Fourth */}
<Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col lg="5" className="text-center text-lg-left">
              <img  className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/screens-section.jpg" alt="Sample image" />
            </Col>
            <Col lg="7">
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Safety</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Technology</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="1">
                  <Fa icon="mail-forward" size="lg" className="indigo-text"/>
                </Col>
                <Col xl="10" md="11" size="10">
                  <h5 className="font-weight-bold mb-3">Finance</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit enim ad minima veniam, quis nostrum exercitationem ullam. Reprehenderit maiores aperiam assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

        {/* Fourth */}

      <Container>
        <section className="my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">Why is it so great?</h2>
          <p className="lead grey-text w-responsive text-center mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <Row>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flag-checkered" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">International</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flask" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Experimental</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="glass" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Relaxing</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
            <Col md="4" className="text-name">
              <img className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Transparent/Small/iphone-portfolio1.png" alt="Sample image" />
            </Col>
            <Col md="4">
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="heart" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Beloved</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="flash" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Rapid</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col size="2">
                  <Fa icon="magic" size="2x" className="deep-purple-text"/>
                </Col>
                <Col size="10">
                  <h5 className="font-weight-bold mb-3">Magical</h5>
                  <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima assumenda deleniti hic.</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </section>
      </Container>

    </div>



  );
};

export default AboutPage;
