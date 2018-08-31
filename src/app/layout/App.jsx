import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable'
import LoadingComponent from './LoadingComponent'
import { UserIsAuthenticated } from '../../features/auth/authWrapper';


const AsyncReportPage = Loadable({
  loader: () => import('../../features/report/ReportPage'),
  loading: LoadingComponent
})

const AsyncExpertisePage = Loadable({
  loader: () => import('../../features/expertise/ExpertisePage'),
  loading: LoadingComponent
})

const AsyncAboutPage = Loadable({
  loader: () => import('../../features/about/AboutPage'),
  loading: LoadingComponent
})
const AsyncContactPage = Loadable({
  loader: () => import('../../features/contact/ContactPage'),
  loading: LoadingComponent
})




const AsyncHomePage = Loadable({
  loader: () => import('../../features/home/HomePage'),
  loading: LoadingComponent
})
const AsyncEventDashboard = Loadable({
  loader: () => import('../../features/event/EventDashboard/EventDashboard'),
  loading: LoadingComponent
})
const AsyncNavBar  = Loadable({
  loader: () => import('../../features/nav/NewNavBar/NavBar'),
  loading: LoadingComponent
})

const AsyncFooterNav  = Loadable({
  loader: () => import('../../features/nav/Footer/FooterNav'),
  loading: LoadingComponent
})

const AsyncEventForm = Loadable({
  loader: () => import('../../features/event/EventForm/EventForm'),
  loading: LoadingComponent
})
const AsyncSettingsDashboard = Loadable({
  loader: () => import('../../features/user/Settings/SettingsDashboard'),
  loading: LoadingComponent
})
const AsyncUserDetailedPage = Loadable({
  loader: () => import('../../features/user/UserDetailed/UserDetailedPage'),
  loading: LoadingComponent
})
const AsyncPeopleDashboard = Loadable({
  loader: () => import('../../features/user/PeopleDashboard/PeopleDashboard'),
  loading: LoadingComponent
})
const AsyncEventDetailedPage = Loadable({
  loader: () => import('../../features/event/EventDetailed/EventDetailedPage'),
  loading: LoadingComponent
})
const AsyncModalManager = Loadable({
  loader: () => import('../../features/modals/ModalManager'),
  loading: LoadingComponent
})
const AsyncNotFound = Loadable({
  loader: () => import('../../app/layout/NotFound'),
  loading: LoadingComponent
})

class App extends Component {
  render() {
    return (
      <div>
        {/* <AsyncModalManager/>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
        </Switch> */}

        <Route
          // path="/(.+)"
          render={() => (
            <div>
              <AsyncNavBar />
              {/* <Container className="main"> */}
              <AsyncModalManager/>
                <Switch>
                  <Route exact path="/" component={AsyncHomePage} />
                  <Route path="/contacts" component={AsyncContactPage} />
                  <Route path="/events" component={AsyncEventDashboard} />
                  <Route path="/report" component={AsyncReportPage} />
                  <Route path="/expertise" component={AsyncExpertisePage} />
                  <Route path="/aboutus" component={AsyncAboutPage} />
                  <Route path="/event/:id" component={AsyncEventDetailedPage} />
                  <Route path="/manage/:id" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/people" component={UserIsAuthenticated(AsyncPeopleDashboard)} />
                  <Route path="/profile/:id" component={UserIsAuthenticated(AsyncUserDetailedPage)} />
                  <Route path="/settings" component={UserIsAuthenticated(AsyncSettingsDashboard)} />
                  <Route path="/createEvent" component={UserIsAuthenticated(AsyncEventForm)} />
                  <Route path="/error" component={AsyncNotFound} />
                  <Route component={AsyncNotFound} />
                </Switch>
                <AsyncFooterNav/>
              {/* </Container> */}
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;