import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import { useEffect } from 'react';
import { getUserAuth } from "./actions"
import { connect } from 'react-redux';
function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, [])

  return (
    <div className="App">
      <Router>



        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>


        </Switch>

      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({

  getUserAuth: () => dispatch(getUserAuth()),
})



export default connect(mapStateToProps, mapDispatchToProps)(App)
