import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import SignIn from './pages/Login/SignIn/SignIn';
import SignUp from './pages/Login/SignUp/SignUp';
import Home from './pages/Home/Home';
import DummyPage from './pages/DummyPage/DummyPage';


function App() {
  return (
    <div className="overflow-hidden">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/dummyPage">
            <DummyPage />
          </Route>
          <Route path="/signIn">
            <SignIn />
          </Route>
          <Route path="/signUp">
            <SignUp />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  );
}

export default App;
