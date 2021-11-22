import Header from "./components/Header";  // components
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";

function App() {
 
  return (
    <div className='container'>
        <Header />  {/* Component header */}
      <Router>
        <Routes>       
          
          <Route exact path='/' element= {<Home/>}/>           
          <Route path='/about' element= {<About/>}/>           
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/add' element= {<AddProduct/>}/>
          <Route path='/edit/:id' element= {<EditProduct/>}/>

        </Routes>        
      </Router>
    </div>
  );
}

export default App;
