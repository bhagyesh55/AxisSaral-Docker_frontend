import React from 'react'
import Sidebar from '../../../components/adminSidebar/Sidebar'
import styles from "./ViewDepartments.module.css"
import { useState,useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
const ViewDepartments = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let token =localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    const [dept, setDept] = useState([]);
    const [newDept, setnewDept] = useState({
        departmentName: "",
        svpUsername: ""
      });

      const [dept1, setDept1] = useState();
    useEffect(() => {
      axios.get("http://localhost:8080/department/",config).then((response) => {
        setDept(response.data);

        axios
        .get("http://localhost:8080/department/1", config)
        .then((response) => {
          setDept1(response.data);
        });
      });
    }, []);



    function addPolicy(e) {
       
        axios
        .post(`http://localhost:8080/department/add`, newDept, token)
        .then((response) => {
            alert("Department Created!!!")
            window.location.reload(true)
        })
        .catch((error) => {
            alert("Enter all details");
            //navigate("/");
        });
    

    }


  return (
    <>
    <Sidebar/>
    <div className={styles.dept}>
    <div className="container ">
      <div
          className={styles.heading}
          style={{ paddingTop: "1%", textAlign: "center" }}
        >
          DEPARTMENTS
          <Button className={styles.addbtn} onClick={handleShow}>
              Add  Department
            </Button>
        </div>
     
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Department</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Enter the name of department</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="name@example.com"
                    autoFocus
                    onChange={(e) =>
                        setnewDept({ ...newDept, departmentName: e.target.value })
                      }
                  />
                </Form.Group>
                {/* <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Choose the SVP </Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="name@example.com"
                    autoFocus
                    onChange={(e) =>
                        setnewDept({ ...newDept, svpUsername: e.target.value })
                      }
                  />
                </Form.Group> */}
                {/* <label for="exampleInputEmail1" className="form-label">
                    Employee's Email
                  </label> */}
                <select
                    className="form-control"
                    value={newDept.svpUsername}
                    onChange={(e) =>
                        setnewDept({ ...newDept, svpUsername: e.target.value })
                    }
                    
                  >
                    <option value="">Choose SVP</option>

                    <option value={dept1?.svp?.username} key={dept1?.svp?.id}>
                      {dept1?.svp?.username}
                    </option>
                  </select>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              {/* <Button variant="light" onClick={handleClose}>
                Close
              </Button> */}
              <Button
                variant="secondary"
                onClick={(e) => {
                  addPolicy(e);
                }}
              >
                Add
              </Button>
            </Modal.Footer>
          </Modal>








        <div class="row">
        {dept?.map((item, index) => {
          return(
          <div class="col-12  col-md-4">             
                <div class={"card text-center  m-5 p-5 shadow "+ styles.cards}  style={{backgroundColor: "whitesmoke" }}>
                  <div class="card-body">
                    <h5 class="card-title " style={{textTransform: "capitalize" }} >{item.departmentName}</h5>
                  </div>
                </div>
         
         
          </div>
             )})}
        </div>
      </div>

    </div>

        


    </>
  )
}

export default ViewDepartments