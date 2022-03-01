import logo from './logo.svg';

import './App.css';
import Navbar from './components/Navbar';

import About from './components/Pages/About'
import Home from './components/Pages/Home'
import Contact from './components/Pages/Contact';



import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

function App() {
  return (

   

 <Router>
      <Navbar/>
    
   
      <Switch>
      <Route path='/' exact component={Home}/>
        <Route path='/About' component={About}/>
        <Route path='/Contact' component={Contact}/>

      </Switch>
      </Router>
   
     
  
  
  );
}

export default App;
