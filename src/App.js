import React, { useState } from 'react';
import { Switch, Route, BrowserRouter as  Router } from 'react-router-dom';
import Searching from './components/searching';
import Profile from './pages/profile';

const App = () => {
  const [globalData, setGlobalData] = useState([]);
  return (
    <Router>
    <Switch>
    <Route exact path="/">
      <Searching
        setGlobalData={setGlobalData}
      />
    </Route>
    <Route path="/profile/:username" component={Profile} />
    </Switch>
    </Router>
  )
};

export default App;