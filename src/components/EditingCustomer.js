import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import { Container, Row, Col} from 'react-bootstrap';
import '../components/editCustomer.css';


const EditingCustomer = () => {

    const [customerList, setCustomerList] = useState([]);
//    const [customers, setCustomers] = useState([]); 

        const [newName, setNewName] = useState("");
         const [newAddress, setNewAddress] = useState("");
        const [newEmail, setNewEmail] = useState("");
         const [newPhoneNo, setNewPhoneNo] = useState("");

        useEffect(() => {
            Axios.get("http://localhost:3001/api/get").then((response) => {
            setCustomerList(response.data);  
            // console.log(response.data);
            });
        }, []);

        const updateCustomerName = (id) => {
            Axios.put("http://localhost:3001/api/update", 
            {name: newName, id: id, address: newAddress, email: newEmail, phoneNo: newPhoneNo}).then((response)=> {
               setCustomerList(customerList.map((value)=> {
                   return value.id == id ? {id: value.id, name: newName, address: newAddress, email: newEmail, phoneNo: newPhoneNo} : value
               }));
            //    alert("update");
            });
        };
    return (
        <div>
          
            <div className="">
            <Container fluid ="sm">
                 <h1 style={{ marginTop:"30px" }}>The List Of  All The Customers To be Editing</h1>
                        
           
           
                {customerList.map((value) => {
                return (
                    <div className="customerlist-table">
                        <Row>
                            <h1 style={{ marginTop:"30px" }}>Identification No: {value.id}</h1>
                        </Row>
                        <Row>
                            <Col className="col-Edit">
                        <div style={{ margin:"10px", gap:"60px" }}>
                            <label style={{ color:"green" }}>Name:</label>
                            <h2> {value.name}</h2>
                            <label style={{ color:"green" }}>Address:</label>
                            <h3> {value.address}</h3>
                            <label style={{ color:"green" }}>Email:</label>
                            <h3> {value.email}</h3>
                            <label style={{ color:"green" }}>Phone No:</label>
                            <h3>{value.phoneNo}</h3>
                        
                        </div>
                        </Col>
                        <Col>
                        <div className="inputs">
                            <input type="text" placeholder="name..." 
                            onChange={(e) => { setNewName(e.target.value)}} style={{width:"500px", height:"50px"}}/>
                             <input type="text" placeholder="address..." 
                            onChange={(e) => { setNewAddress(e.target.value)}} style={{width:"500px", height:"50px"}}/>
                            <input type="text" placeholder="email..." 
                            onChange={(e) => { setNewEmail(e.target.value)}} style={{width:"500px", height:"50px"}}/>
                            <input type="text" placeholder="phoneNo..." 
                            onChange={(e) => { setNewPhoneNo(e.target.value)}} style={{width:"500px", height:"50px"}}/>

                            <button type="button" onClick={()=>{updateCustomerName(value.id)} } 
                            style={{marginLeft:"150px", marginBottom: "55px", marginTop:"30px" }}>Update</button>

                        </div>
                        </Col>
                        </Row>
                    </div>
              
        )})}
            
   </Container>
        </div>
        </div>
    )
}

export default EditingCustomer;
