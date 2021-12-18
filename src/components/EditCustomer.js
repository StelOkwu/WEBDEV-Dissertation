import React, {useState} from 'react';
import Axios from 'axios';



 function EditCustomer() {

      const [name, setNewCustomerName] = useState("");
        const [address, setNewCustomerAddress] = useState("");
        const [email, setNewCustomerEmail] = useState("");
        const [phoneNo, setNewCustomerPhoneNo] = useState("");
        // const [customerList, setCustomerList] = useState([]);


        // const [newCustomerName, setNewCustomerName] = useState("");
        // const [newCustomerAddress, setNewCustomerAddress] = useState("");
        // const [newCustomerEmail, setNewCustomerEmail] = useState("");
        // const [newCustomerPhoneNo, setNewCustomerPhoneNo] = useState("");


      const updateCustomer = (customers) => {
            Axios.put("http://localhost:3001/api/update", {
                name: name, 
                address: address, 
                email: email, 
                phoneNo: phoneNo
            });
            setNewCustomerName("");
            setNewCustomerAddress("");
            setNewCustomerEmail("");
            setNewCustomerPhoneNo("");
            
        };

    return (
                <div className="customer-info">
            <h1>Edit Customer</h1>
            <div className="form">
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => { setNewCustomerName(e.target.value)}}/>
                <label>Address</label>
                <input type="text" name="address" onChange={(e) => { setNewCustomerAddress(e.target.value)}}/>
                <label>Email</label>
                <input type="text" name="email" onChange={(e) => { setNewCustomerEmail(e.target.value)}} />
                <label>Phone Number</label>
                <input type="text" name="phoneNo" onChange={(e) => { setNewCustomerPhoneNo(e.target.value)}} />
                <button type="submit" onClick={updateCustomer}>Update</button>
            </div>

        </div>
    )
}
export default EditCustomer;