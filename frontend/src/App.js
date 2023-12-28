import "./App.css";
import Header from "./Components/Header";
import AddStudent from "./Components/AddStudent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header/>
        <Routes>
          <Route path="/add" element={<AddStudent/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
