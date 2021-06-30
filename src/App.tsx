import { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import GlobalStyle, { colors } from './GlobalStyle';
import { RootState } from './store/reducers';
import { autoSignIn } from './services/auth';
import Signup from './pages/auth-pages/signup/Signup';
import Signin from './pages/auth-pages/signin/Signin';
import ResetPassword from './pages/auth-pages/reset-password/ResetPassword';
import MyDay from './pages/dashboard-pages/MyDay';
import Important from './pages/dashboard-pages/Important';
import Planned from './pages/dashboard-pages/Planned';
import Tasks from './pages/dashboard-pages/Tasks';
import NotFoundPage from './pages/NotFoundPage';
import FlexContainer from './components/FlexContainer';
import Overlay from './components/Overlay';
import SideNav from './components/sidenav/SideNav';
import Header from './components/header/Header';

const App = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  let { idToken } = useSelector((state: RootState) => state.authReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(autoSignIn());
  }, []);

  let routes = (
    <>
      <Switch>
        <Route path={'/signup'} exact component={Signup} />
        <Route path={'/'} exact component={Signin} />
        <Route path={'/resetPassword'} exact component={ResetPassword} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );

  if (idToken) {
    routes = (
      <>
        <Header />
        <FlexContainer height={'100vh'}>
          <SideNav isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <Overlay isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
          <Switch>
            <Route path={'/myDay'} exact component={MyDay} />
            <Route path={'/important'} exact component={Important} />
            <Route path={'/planned'} exact component={Planned} />
            <Route path={'/tasks'} exact component={Tasks} />
          </Switch>
        </FlexContainer>
      </>
    );
  }

  return (
    <ThemeProvider theme={{ colors }}>
      <GlobalStyle />
      {routes}
    </ThemeProvider>
  );
};

export default App;
