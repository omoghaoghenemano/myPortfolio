import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';

import Portfolio from './components/Pages/Portfolio'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact';



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import React from 'react';
import { Redirect } from 'react-router-dom';

class App extends React.Component {
  constructor(){
    super();
    
    this.state = {
      name: 'React',
      isUserAuthenticated:true
    }
  }

  render(){
  return (
  

   
    <>
 <Router>
 this.state.isUserAuthenticated?<Redirect to='/'/>:<Redirect to='/'/>
      <Navbar/>

    
   
      <Switch>
     
      <Route path='/'  exact component={Home}/>
        <Route path='/Portfolio' component={Portfolio}/>
        <Route path='/Contact' component={Contact}/>

      </Switch>
      </Router>
   
     
      </>
  
  );
}
}

export default App;
