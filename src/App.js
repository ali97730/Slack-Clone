import React from "react"
import './App.css';
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"


import{BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Chat from "./components/Chat";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import Welcome from "./components/Welcome";

function App() {

    const [{user},dispatch] = useStateValue();

  return (
   <Router>


      <div className="App">
        
          {!user ? (
           <Login/>
          ):(<>
                  <Header/>
                  <div className="app__body"> 
                      <Sidebar />
                      <Switch>
                        <Route path="/room/:roomId">
                          <Chat/>
                        </Route>
                        <Route to ="/">
                             <Welcome/>
                        </Route>
                      </Switch>
                  </div>
          </>)}
         
    </div>
   </Router>
  );
}

export default App;
