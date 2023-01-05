import React from 'react';
import { BrowserRouter as Router , Routes, Route} from "react-router-dom"
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar.component';
import ExercisesList from './components/exercises-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
function App() {
  return (
    <>
    <Router>
  <div className="container">

    <Navbar/>
  <Routes>
      <Route exact path='/'  element={<ExercisesList/>}/>
      <Route exact path='/edit/:id'  element={<EditExercise/>}/>
      <Route exact path='/create'  element={<CreateExercise/>}/>
      <Route exact path='/user'  element={<CreateUser/>}/>
    
  </Routes>
  </div>

  </Router>
  </>
  );
}

export default App;
