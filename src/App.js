import Login from "./component/Login";
import Home from "../src/page/Home"
import Header from "../src/component/Header"
import Admin from "../src/page/Admin"
import Student from "../src/page/Student"
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Staff from "./page/Staff";
import Mathe from "./page/Mathe";
import ManageStaff from "./page/ManageStaff";

function App() {
  return (
    <div className="App">
      <Header/>
   <BrowserRouter>    
     
      <Routes>
       
      <Route
        path="/" exact
        element={ <Home/>}
      ></Route>

      <Route path="/admin" exact element={<Admin/>}/>
      <Route path="/staff" exact element={<Staff/>}/>
      <Route path="/admin/manage-students" exact element={<Student/>}/>
      <Route path="/admin/manage-staff" exact element={<Staff/>}/>
      <Route path="/staff/mathe" exact element={<Mathe/>}/>

      </Routes>
      </BrowserRouter>
      
     
     
    </div>
  );
}

export default App;
