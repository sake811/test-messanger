import React from 'react';
import Messages from './components/messages/messages';
import AuthPage from './components/authPage/authPage';
import { Route, Switch } from "react-router-dom"
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={AuthPage} />
        <Route path="/messages/:userLogin?" component={Messages} />
      </Switch>
    </>
  )
}

export default App;
