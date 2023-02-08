import React, { useRef } from "react";
import Sidebar from "../../../components/adminSidebar/Sidebar";
import styles from "./AllPolicies.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Policies from "./Policies";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
function AdminAllPolicies() {
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [state, setState] = useState({
    file: "",
  });
  const [name, setName] = useState();
  let formdata = new FormData();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const inputEl = useRef("");
  const [searchTerm, setSearchTerm] = useState("");
  const [names, setNames] = useState([]);



  useEffect(() => {
    axios
      .get("http://localhost:8080/documents/names", config)
      .then((response) => {
        setNames(response.data);
      });
  }, []);
  //   console.log(names);

  const getSearchTerm = (e) => {
    e.preventDefault();

    setSearchTerm(e.target.value);
  };
  if (searchTerm.length > 0) {
    console.log(searchTerm);
    names.filter((name) => {
      return name.documentName.match(searchTerm);
    });
  }
  function handleFile(e) {
    let file = e.target.files[0];
    setState({ ...state, file: file });
  }
  function addPolicy(e) {
    let file = state.file;

    let formdata = new FormData();
    console.log(name);
    console.log(file);
    formdata.append('documentId',name);
    formdata.append('file', file);
    console.log(formdata.documentId)
    axios({
      url: 'http://localhost:8080/add-document',
      method: "POST",
      data: formdata
    }).then((response) => {
      handleClose()
      window.location.reload(true)
      })





  }
  return (
    <>
      <Sidebar />
      <div className={styles.allpolicies}>
        <div className="container ">
          <div className={styles.heading} style={{ textAlign: "center" }}>
            COMPANY POLICIES
            <Button className={styles.addbtn} onClick={handleShow}>
              Add Policy
            </Button>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Upload Policy</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Policy Name</Form.Label>
                  <Form.Control
                    type="text"
                    // placeholder="name@example.com"
                    autoFocus
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  {/* <Form.Label>Policy Name</Form.Label> */}
                  <Form.Control
                    type="file"
                    // placeholder="name@example.com"
                    autoFocus
                    onChange={(e) => handleFile(e)}
                  />
                </Form.Group>
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
          <div className={styles.search}>
            <div>
              <input
                className={styles.input}
                type="search"
                placeholder="Search Policies"
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
              />
              <FaSearch className={styles.icon} />
            </div>
          </div>
          {names
            .filter((name) =>
              name.documentName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            ?.map((item, index) => {
              return <Policies item={item} index={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default AdminAllPolicies;
