import './App.css';
import {Home} from './Home';
import {Department} from './Department';
import {Employee} from './Employee';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Switch} from 'react-router-dom' 

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 alert alert-success">REACT JS</h3>
        <Navigation></Navigation>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/department">
              <Department />  
            </Route>
            <Route path="/employee">
              <Employee />  
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
