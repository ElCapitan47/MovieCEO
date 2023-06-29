import Home from "./Home";
import SearchResults from "./SearchResults";
import Details from "./Details";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Watchlist from "./Watchlist";
import About from "./About";
//npx json-server --watch data/db.json --port 8000
//npm start
function App() {
  return (
    <Router>
        <div className="App">
          <Navbar/>
           <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route exact path='/SearchResults/:entry'>
              <SearchResults/>
            </Route>
            <Route exact path='/Details/:id'>
              <Details/>
            </Route>
            <Route exact path='/Watchlist'>
              <Watchlist/>
            </Route>
            <Route exact path='/About'>
              <About/>
            </Route>
           </Switch>
        </div>
    </Router>
    
  );
}

export default App;
