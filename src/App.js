import React from 'react'
import './App.css';
import UserForm from './Components/UserForm'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import About from './Components/About'
import {BrowserRouter,Switch,Route} from  'react-router-dom'
//import NewComponent from './NewComponent';

function App() {
  return (
    <div >     
      <BrowserRouter>
      <Home/>
      <Switch>
      <Route path="/" exact component={UserForm}/> 
      <Route path="/Dashboard" exact component={Dashboard}/> 
      <Route path="/About" exact component={About}/> 
      {/* <e component={NoMatch}/> */}
      {/* <UserForm/> */}
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
