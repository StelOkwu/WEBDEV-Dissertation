import React, {useState} from 'react';
import '../components/customer.css';
import Axios from 'axios';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';

function Customers() {
        const [name, setCustomerName] = useState("");
        const [address, setCustomerAddress] = useState("");
        const [email, setCustomerEmail] = useState("");
        const [phoneNo, setCustomerPhoneNo] = useState("");
        const [customerList, setCustomerList] = useState([]);

       
        //creating the function for submitting the Create button
        const createCustomer = () => {
            //making a http post request to the api using Axios
            Axios.post('http://localhost:3001/api/insert', 
            {
                name: name, 
                address: address, 
                email: email, 
                phoneNo: phoneNo
            });
            setCustomerList([
                ...customerList,
                 {
                name: name, 
                address: address, 
                email: email, 
                phoneNo: phoneNo
                 },
            ]);
        };
    return (
        <div className="customer-info">
            <h1 style={{ marginTop:"20px", color:"black" }}>Admin User Form for Creating new Customer</h1>
           <Container fluid>
            <div className="form">
                 <h1 style={{ marginTop:"40px" }}>Create Customer</h1>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => { setCustomerName(e.target.value)}}/>
                <label>Address</label>
                <input type="text" name="address" onChange={(e) => { setCustomerAddress(e.target.value)}}/>
                <label>Email</label>
                <input type="text" name="email" onChange={(e) => { setCustomerEmail(e.target.value)}} />
                <label>Phone Number</label>
                <input type="text" name="phoneNo" onChange={(e) => { setCustomerPhoneNo(e.target.value)}} />
                <button type="submit" className="button" onClick={createCustomer}>Create</button>
            </div>
            </Container>
        <div>
                <Footer />
        </div>
        </div>
    )}
export default Customers;
