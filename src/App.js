



import Navbar from './Navbar';
import Profile from './Profile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NewSale from './NewSale';
import SaleDetails from './SaleDetails';
import LostBoy from './Lostboy';
import Login from './Login';

function App() {
  // const title = 'Welcome to Scale-Sales';
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
        <Switch>
          <Route exact path="/">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route path="/NewSale">
            <NewSale />
          </Route>
          <Route path="/Sales/:id">
            <SaleDetails />
          </Route>
          <Route path="*">
            <LostBoy />
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
