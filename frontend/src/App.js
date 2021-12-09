import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Songs from "./components/Songs/songs";
import SinleSong from "./components/SingleSong";
import Profile from "./components/Profile";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/'>
            <Songs />
          </Route>
          <Route path='/:songId'>
            <SinleSong />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;