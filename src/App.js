import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';

const Bhk1servies =React.lazy(()=> import ('pages/1Bhkservices'));
const Bhk2servies =React.lazy(()=> import ('pages/2Bhkservices'));
const Bhk3servies =React.lazy(()=> import ('pages/3Bhkservices'));
const Commercial =React.lazy(()=> import ('pages/Commercial'));
const AlertPage = React.lazy(() => import('pages/AlertPage'));
// const AuthModalPaAlertPagege = React.lazy(() => import('pages/AuthModalPage'));
const Contact = React.lazy(() => import('pages/Contact'));
const ButtonGroupPage = React.lazy(() => import('pages/ButtonGroupPage'));
// const ButtonPage = React.lazy(() => import('pages/ButtonPage'));
// const AboutPage = React.lazy(() => import('pages/CardPage'));
const bhk1form = React.lazy(()=> import('pages/1bhkform'));
const bhk2form = React.lazy(()=> import('pages/2bhkform'));
const bhk3form = React.lazy(()=> import('pages/3bhkform'));
const PestType = React.lazy(()=> import('pages/PestType'));
const PestServiceType = React.lazy(()=> import('pages/PestServiceType'));

  const PestApply =  React.lazy(()=> import('pages/PestApply'));
  const Gallery =  React.lazy(()=> import('pages/Gallery'));
  const BHK1list =  React.lazy(()=> import('pages/BHK1list'));
  const BHK2list =  React.lazy(()=> import('pages/BHK2list'));
  const BHK3list =  React.lazy(()=> import('pages/BHK3list'));
  const Commerciallist =  React.lazy(()=> import('pages/Commerciallist'));
  const admindashboard = React.lazy(() => import('pages/adminDashboard'));


const commercialform = React.lazy(()=> import('pages/commercialform'));
const AboutPage = React.lazy(() => import('pages/AboutPage'));
const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('pages/DropdownPage'));
const FormPage = React.lazy(() => import('pages/FormPage'));
const InputGroupPage = React.lazy(() => import('pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('pages/ModalPage'));
const ProgressPage = React.lazy(() => import('pages/ProgressPage'));
const TablePage = React.lazy(() => import('pages/TablePage'));
// const TypographyPage = React.lazy(() => import('pages/TypographyPage'));
const TESTMONIALS = React.lazy(() => import('pages/TESTMONIALS'));
// const MaindashLayout = React.lazy(()=> import('pages/dashpage'));
const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path ="/1Bhkservices" component={Bhk1servies} />
                <Route exact path ="/2Bhkservices" component={Bhk2servies} />
                <Route exact path ="/3Bhkservices" component={Bhk3servies} />
                <Route exact path ="/Commercial" component={Commercial} />
                <Route exact path ="/bhk1form" component={bhk1form} />
                <Route exact path ="/bhk2form" component={bhk2form} />
                <Route exact path ="/bhk3form" component={bhk3form} />
                <Route exact path ="/PestType" component={PestType} />
                <Route exact path ="/PestApply" component={PestApply} />
                <Route exact path ="/PestServiceType" component={PestServiceType} />
                <Route exact path ="/Gallery" component={Gallery} />
                <Route exact path ="/admindashboard" component={admindashboard} />

                <Route exact path ="/BHK1list" component={BHK1list} />
                <Route exact path ="/BHK2list" component={BHK2list} />
                <Route exact path ="/BHK3list" component={BHK3list} />
                <Route exact path ="/Commerciallist" component={Commerciallist} />
               


                <Route exact path ="/commercialform" component={commercialform} />
                <Route exact path="/" component={DashboardPage} />
                {/* <Route exact path="/login-modal" component={AuthModalPage} /> */}
                <Route exact path="/Contact" component={Contact} />
                {/* <Route exact path="/cards" component={CardPage} /> */}
                <Route exact path="/TESTMONIALS" component={TESTMONIALS} />
                {/* <Route exact path="/MaindashLayout" component={MaindashLayout} /> */}
                {/* <Route exact path="/typography" component={TypographyPage} /> */}
                <Route exact path="/alerts" component={AlertPage} />
                <Route exact path="/tables" component={TablePage} />
                {/* <Route exact path="/badges" component={BadgePage} /> */}
                <Route
                  exact
                  path="/button-groups"
                  component={ButtonGroupPage}
                />
                <Route exact path="/dropdowns" component={DropdownPage} />
                <Route exact path="/progress" component={ProgressPage} />
                <Route exact path="/modals" component={ModalPage} />
                <Route exact path="/forms" component={FormPage} />
                <Route exact path="/input-groups" component={InputGroupPage} />
                <Route exact path="/About" component={AboutPage} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
