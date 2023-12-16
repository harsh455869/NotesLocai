
import './App.css';
import Nav from './Nav';
import {BrowserRouter as Router,Route,Routes}from'react-router-dom'
import Makenotes from './Makenotes';
import SignIn from './SignIn'
import Todo from './Todo';

   
  function App(){
  
  return (
   
  <Router>
   <Routes>
    <Route exact path="/" element={<Todo/>}> </Route>
    <Route exact path="/About"  element={<Nav/>}> </Route>
    <Route exact path="/SignIn"  element={<SignIn/>}> </Route>
    <Route exact path="/ContactUs"  element={<Nav/>}> </Route>
    <Route exact path="/Status"  element={<Nav/>}> </Route>
   
  
    </Routes>
   </Router>
   
  );
}

export default App;
