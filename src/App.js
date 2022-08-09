import React from "react";
import { Route, Switch } from "react-router-dom";
import {ToastContainer} from "react-toastify";
import './App.css';
import AddTask from "./Components/AddTask";
import EditTask from "./Components/EditTask";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
    <Navbar/>
    <Switch>
      <Route exact path="/" component={()=><Home/>}/>
        <Route path="/add">
        <AddTask/>
        </Route>
        <Route path="/edit/:id">
        <EditTask/>
        </Route>
        {/* <Route  path="/">
    <h1>Welcome to My Task A</h1>
        </Route> */}
        </Switch> 
    </div>
  );
}

export default App;
