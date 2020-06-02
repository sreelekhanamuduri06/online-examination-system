import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import MyTests from './components/MyTests';
import CreateTest from './components/CreateTest';
import EditTest from './components/EditTest';
import StudentInfoForm from './components/StudentInfoForm';

function App() {
  return (
    <Router>
      <div className="container-fluid" style={{marginTop: 10}}>
        <Route path="/student/taketest/:id" component={StudentInfoForm} />
        <Route path="/admin/editTest/:id" component={EditTest}/>
        <Route path="/admin/Homepage" exact component={Homepage} />
        <Route path="/admin/MyTests" component={MyTests} />
        <Route path="/admin/CreateTest" component={CreateTest} />
      </div>
    </Router>
  );
}

export default App;
