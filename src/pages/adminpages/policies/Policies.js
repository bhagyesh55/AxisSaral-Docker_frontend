import React from "react";
import styles from "./AllPolicies.module.css";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
function Policies(props) {
  let token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(true);
  const [viewPdf, setViewPdf] = useState(false);
  const closePdf = () => setViewPdf(false);
  // const openPdf = () => setViewPdf(true);
  const [document, setDocument] = useState(null);

  const deletePolicy = () => {
    // console.log(e.target.value);
    axios
      .delete(`http://localhost:8080/delete/document/${props.item.documentName}`, config)
      .then((response) => {
        alert(`Policy :${props.item.documentName} deleted`);
        window.location.reload(true)
      });
  };

  const openPdf = () => {
    setViewPdf(true);
    axios
      .get(`http://localhost:8080/document/${props.item.documentName}`, config)
      .then((response) => {
        setDocument(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  if (isLoading) {
    return (
      <div>
        <div className={styles.names} onClick={openPdf}>
          {props.item.documentName}
        </div>
        <Button
          className={styles.delbtn}
          onClick={deletePolicy}
        >
          &times;
        </Button>
      </div>
    );
  }
  return (
    <div>
      <div>
        <Modal show={viewPdf} size="lg" fullscreen={"below lg"}>
          <Modal.Header closeButton onClick={closePdf}>
            <Modal.Title>{props.item.documentName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <iframe
              src={`data:application/pdf;base64,${document}`}
              title={document["fileName"]}
              width="100%"
              height="500rem"
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closePdf}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div>
        <div className={styles.names} onClick={openPdf}>
          {props.item.documentName}
        </div>
        <Button
          className={styles.delbtn}
          onClick={deletePolicy}
        >
          &times;
        </Button>
      </div>
    </div>
  );
}

export default Policies;
