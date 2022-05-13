import React, {useEffect, useState} from "react";
import Home from "./pages/home";
import Upcoming from "./pages/upcoming";
import Newgames from "./pages/newgames";
import Pcgames from "./pages/pcgames";
import Psgames from "./pages/psgames";
import Globalstyles from "./globalstyles";
import Navbar from "./componenets/nav";
import Sidebar from "./componenets/sidebar";
import {Switch,Route} from 'react-router-dom'
import Gamedetailrender from "./componenets/gamedetailrender";
import Searchpage from "./pages/searchedgames";
function App() {

  const [toggle,settoggle] = useState(false)


  return (
    <div className="App">
      <Globalstyles />
      <Navbar toggle={toggle} settoggle={settoggle}/>
      <Sidebar toggle={toggle} settoggle={settoggle}/>

      <Switch>
        <Route path="/" exact>
      <Home />
      </Route>
      <Route path="/gamedetails" exact>
      <Gamedetailrender />
      </Route>
      <Route path="/upcoming">
      <Upcoming />
      </Route>
      <Route path="/newgames">
      <Newgames />
      </Route>
      <Route path="/pc" exact>
      <Pcgames />
      </Route>
      <Route path="/playstation">
      <Psgames />
      </Route>
      <Route path="/searchgames" exact>
       <Searchpage />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
