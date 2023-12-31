import "./App.css";
import Header from "./Components/Header";
import AllStudent from "./Components/AllStudent";
import AddStudent from "./Components/AddStudent";
import UpdateStudent from "./Components/UpdateStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/" exact element={<AllStudent/>} />
          <Route path="/add"  exact element={<AddStudent/>} />
          <Route path="/update/:id"  exact element={<UpdateStudent/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
