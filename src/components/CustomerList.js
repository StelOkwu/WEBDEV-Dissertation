import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function CustomerList() {
    const [customerList, setCustomerList] = useState([]);
    const [customers, setCustomers] = useState([]); 

        useEffect(() => {
            Axios.get("http://localhost:3001/api/get").then((response) => {
            setCustomerList(response.data);  
            // console.log(response.data);
            });
        }, []);

        const deleteCustomer = (customers) => {
            Axios.delete(`http://localhost:3001/api/delete/${customers}`);
        };
        const openCustomer = (rowIndex) => {
            const id = customers.current[rowIndex].id;
            this.props.history.push("/customer/" + id); };

    return (
        <div>
        <div className="customerlist">
            <Container>
                <Row>
                 <h1>The List Of  All The Customers</h1>
                 <Col>
                         <div className="linknew-customer">
                                <button type="button" btn btn-primary><Link to="/customer"style={{ color:"black" }}>Create New Customer</Link> </button></div>
                </Col>
                </Row>
                <Row>
           <tr>
                {customerList.map((value) => {
                return (
                    <div className="customerlist-table">
                        <Table responsive="md" striped bordered hover className="table" 
                        style={{ marginRight:"auto", marginLeft:"auto" , width:"100%"}}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                     <th>Name</th>
                                      <th>Address</th>
                                      <th>Email</th>
                                      <th>Phone No</th>
                                      <th>Action</th>
                                   </tr>
                            </thead>
                            <tbody>
                                <tr>
                                      <td  style={{width:"100px" }}>{value.id}</td>
                                      <td style={{width:"300px" }}>{value.name}</td>
                                      <td style={{width:"300px" }}>{value.address}</td>
                                      <td style={{width:"300px" }}>{value.email}</td>
                                      <td style={{width:"200px" }}>{value.phoneNo}</td>
                                    <td style={{width:"400px" }}>
                                       <button type="button" onClick={() => {deleteCustomer(value.id)}} 
                                         className="btn btn-danger" style={{ backgroundColor:"red", width:"90px" }}>
                                            Delete
                                       </button>
                                       |   
                                       <button type="button" className="btn btn-success" style={{ backgroundColor:"green", width:"90px"}}><Link to="/customer/edit" onClick={() => openCustomer(value)}>Edit</Link></button>
                                    </td>
                                </tr>
                              
                            </tbody>
                        </Table>
                    </div>
              
        )})}
            </tr>
            </Row>
   </Container>
        </div>
        <Footer />
          </div>
    )}
export default CustomerList;
                                      