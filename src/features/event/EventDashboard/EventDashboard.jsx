import React, { Component } from 'react';
import { Grid, Loader } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { getEventsForDashboard } from '../eventActions';
import EventList from '../EventList/EventList';
import LoadingComponent from '../../../app/layout/LoadingComponent';
import EventActivity from '../EventActivity/EventActivity';
import {  Table } from 'mdbreact';
import  { Carousel, CarouselInner, CarouselItem, View, Container, Card, CardBody,CardImage, CardTitle, CardText,Button,Mask } from 'mdbreact';

const query = [
  {
    collection: 'activity',
    orderBy: ['timestamp', 'desc'],
    limit: 5
  }
]

const mapState = state => ({
  events: state.events,
  loading: state.async.loading,
  activities: state.firestore.ordered.activity
});

const actions = {
  getEventsForDashboard
};

class EventDashboard extends Component {
  // state = {
  //   moreEvents: false,
  //   loadingInitial: true,
  //   loadedEvents: [],
  //   contextRef: {}
  // };

  // async componentDidMount() {
  //   let next = await this.props.getEventsForDashboard();

  //   if (next && next.docs && next.docs.length > 1) {
  //     this.setState({
  //       moreEvents: true,
  //       loadingInitial: false
  //     });
  //   }
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (this.props.events !== nextProps.events) {
  //     this.setState({
  //       loadedEvents: [...this.state.loadedEvents, ...nextProps.events]
  //     });
  //   }
  // }

  // getNextEvents = async () => {
  //   const { events } = this.props;
  //   let lastEvent = events && events[events.length - 1];
  //   let next = await this.props.getEventsForDashboard(lastEvent);
  //   if (next && next.docs && next.docs.length <= 1) {
  //     this.setState({
  //       moreEvents: false
  //     });
  //   }
  // };

  // handleContextRef = contextRef => this.setState({contextRef})

  render() {
    // const { loading, activities } = this.props;
    // const { moreEvents, loadedEvents } = this.state;
    // if (this.state.loadingInitial) return <LoadingComponent inverted={true} />;

    return (

      

      <div>
        <div className="container mt-4">
        <div className="row">
          <div className="col-md-12">
            <Carousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
              className="z-depth-1">
              <CarouselInner>
                <CarouselItem itemId="1">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/Tropical.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
                <CarouselItem itemId="2">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/forest.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
                <CarouselItem itemId="3">
                  <video className="video-fluid d-block" autoPlay loop>
                    <source src="https://mdbootstrap.com/img/video/Agua-natural.mp4" type="video/mp4" />
                  </video>
                </CarouselItem>
              </CarouselInner>
            </Carousel>
          </div>
        </div>
      </div>

 {/* VIDEO */}

 <Container>
        <h4 className="mt-5 mb-2"></h4>
        <Carousel
          activeItem={1}
          length={4}
          showControls={true}
          showIndicators={false}
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg" alt="First slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(99).jpg" alt="Second slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(17).jpg" alt="Third slide" />
              </View>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20%28143%29.jpg" alt="Mattonit's item" />
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        <h4 className="mt-5 mb-2"></h4>
      </Container>

{/* SECOND */}

 <Container>
        <h4 className="mt-5 mb-2"></h4>
        <Carousel
          activeItem={1}
          length={3}
          showControls={true}
          showIndicators={true}
          thumbnails
          className="z-depth-1">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(88).jpg" alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(121).jpg" alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
            </CarouselItem>
          </CarouselInner>
        </Carousel>
        <h4 className="mt-5 mb-2"></h4>

      </Container>

      {/* THIRD */}


        <Table>
  <thead className="blue-grey lighten-4">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

<Table>
  <thead className="mdb-color darken-3">
    <tr className="text-white">
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

     <Table>
  <thead className="blue-grey lighten-4">
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>

<Table>
  <thead className="mdb-color darken-3">
    <tr className="text-white">
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>



<div className="embed-responsive embed-responsive-21by9">
  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen></iframe>
</div>

        </div>
      // <Grid>
      //   <Grid.Column width={10}>
      //     <div ref={this.handleContextRef}>
      //     <EventList
      //       loading={loading}
      //       moreEvents={moreEvents}
      //       events={loadedEvents}
      //       getNextEvents={this.getNextEvents}
      //     />
      //     </div>

      //   </Grid.Column>
      //   <Grid.Column width={6}>
      //     <EventActivity activities={activities} contextRef={this.state.contextRef} />
      //   </Grid.Column>
      //   <Grid.Column width={10}>
      //     <Loader active={loading}/>
      //   </Grid.Column>
      // </Grid>
    );
  }
}



export default connect(mapState, actions)(firestoreConnect(query)(EventDashboard));




 // <Grid>
      //   <Grid.Column width={10}>
      //     <div ref={this.handleContextRef}>
      //     <EventList
      //       loading={loading}
      //       moreEvents={moreEvents}
      //       events={loadedEvents}
      //       getNextEvents={this.getNextEvents}
      //     />
      //     </div>

      //   </Grid.Column>
      //   <Grid.Column width={6}>
      //     <EventActivity activities={activities} contextRef={this.state.contextRef} />
      //   </Grid.Column>
      //   <Grid.Column width={10}>
      //     <Loader active={loading}/>
      //   </Grid.Column>
      // </Grid>