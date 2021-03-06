import React, { useState } from 'react';
import styled from 'styled-components';
import {
  HashRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import { FrequencyContext } from './assets/const';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Navbar from './components/Navbar/Navbar';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';
import Sider from './components/Sider/Sider';
import routers from './pages/router/index';
import './App.css';

const AppWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const Routes = withRouter(({ location }) => (
  <TransitionGroup
    className={'router-wrapper'}
    childFactory={child => React.cloneElement(
      child,
      { classNames: 'in' }
    )}
  >
    <CSSTransition
      timeout={1000}
      key={location.pathname}
      onEnter={() => {
        window.WarpSpeedCtx.SPEED = 50;
      }}
      onEntered={() => {
        window.WarpSpeedCtx.SPEED = 5;
      }}
    >
      <Switch location={location}>
        {routers.map((r, key) => (
          <Route
            component={() => r.component}
            exact
            key={key}
            path={r.path}
          />
        ))}
      </Switch>
    </CSSTransition>
  </TransitionGroup>
)
);


function App() {
  const [frequency, setFrequency] = useState(null);

  return (
    <AppWrapper>
      <AudioPlayer setFrequency={setFrequency} />
      <Router>
        <Navbar />
        <FrequencyContext.Provider value={frequency}>
          <Routes />
        </FrequencyContext.Provider>
      </Router>
      <Sider />
    </AppWrapper>
  );
}

export default App;
