import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CustomerList from './components/CustomerList';
import Login from "./components/Login";
import Registration from './components/Registration';
import Customers from './components/Customers';
// import Navbar from './components/Navbar';
import EditCustomer from './components/EditCustomer';
import Mainpage from './components/Mainpage';
import Services from './pages/Services';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import References from './pages/References';
import Navbar from './components/navbarcomponents/Navbar';
import Offices from './pages/Offices';
import Companies from './pages/Companies';
import HousingAsso from './pages/HousingAsso';
import Others from './pages/Others';
import Industries from './pages/Industries';
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import EditingCustomer from './components/EditingCustomer';
import Footer from './components/Footer';
import CaruoselImage from './components/CaruoselImage';



const App = () => {
 
  return (
    <>
    <div className="App">
      <Router>
          <Navbar />
       <Routes>
          {/* <Route path="/" exact component={<App />} /> */}

          <Route path="/mainpage" exact element={<Mainpage />} />
           
            <Route path="/services" exact element={  <Services />} />
             <Route path="/aboutUs" exact element={<AboutUs />} />
              <Route path="/contactUs" exact element={<ContactUs />} />
               <Route path="/references" exact element={<References />} />

          <Route path="/login" exact element={<Login />} />
         
          <Route path="/register" exact element={<Registration />}/>
          <Route path="/customer" exact element={<Customers />} />
          <Route path="/customerlist" exact element={<CustomerList />} />
           <Route path="/editcustomer" exact element={<EditCustomer />} />
           <Route path="/offices" exact element={<Offices />} />

           <Route path="/offices" exact element={<Companies />} />
           <Route path="/houseAsso" exact element={<HousingAsso />} />
           <Route path="/others" exact element={<Others />} />
            <Route path="/industries" exact element={<Industries />} />
            <Route path="/companies" exact element={<Companies />} />

          {/* <Navigate to="/" /> */}
          <Route path="/customer/edit" element={<EditingCustomer />} /> 
            <Route path="/caruoselimage" exact element={<CaruoselImage />} />

          </Routes>
        
        </Router>
      

    </div>
 
    </>
  );
}

export default App;
