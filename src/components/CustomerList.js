import  Axios  from 'axios';
import React, {useState, useEffect} from 'react';
import { Container, Table } from 'react-bootstrap';
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


        // const editcustomer = () => {
        //  <Route path="/editcustomer" exact element={<EditCustomer />} />
        //      this.this.props.history.push('/EditCustomer');
        // };

        const openCustomer = (rowIndex) => {
            const id = customers.current[rowIndex].id;
            this.props.history.push("/customer/" + id);
        };

    return (
        <div>
      
        <div className="customerlist" style={{ marginRight:"auto", marginLeft:"auto" , width:'100%'}}>
            
            <div className="linknew-customer">
                <Link to="/customer">Create New Customer</Link> 
            </div>
            <Container fluid>

            <h1>The List Of  All The Customers</h1>
            <tr style={{ marginRight:"auto", marginLeft:"auto", width: "100%"}}>
            {customerList.map((value) => {
                return (
                    <div className="customerlist-table">
                        <Table responsive="md" striped bordered hover className="table" style={{ marginRight:"auto", marginLeft:"auto" , width:'100%'}}>
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
                                    <td>{value.id}</td>
                                     <td>{value.name}</td>
                                      <td>{value.address}</td>
                                      <td>{value.email}</td>
                                      <td>{value.phoneNo}</td>
                                       <td><Link to="/EditCustomer">Edit</Link> |
                                       <button type="button" onClick={() => {deleteCustomer(value.id)}} 
                                       className="btn btn-danger" style={{ backgroundColor:"red", width:"80px" }}>
                                           Delete
                                        </button> |
                                            <Link to="/EditCustomer" onClick={() => openCustomer(value)}>Editing</Link>
                                       {/* <Link to="/EditCustomer">Click Update</Link> */}
                                       </td>
                                </tr>
                              
                            </tbody>
                        </Table>
                    </div>
              
        )})}
            </tr>
   </Container>
        </div>
        <Footer />
          </div>
    )
}

export default CustomerList

//<button type="button" className="btn btn-primary sm" onClick={() => {updateCustomer(value.name)}}>Update</button>
                                      