import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navber.component";
import ExercisesList from "./components/exercise-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component"

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exct component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercises} />
      <Route path="/create" component={CreateExercises} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
