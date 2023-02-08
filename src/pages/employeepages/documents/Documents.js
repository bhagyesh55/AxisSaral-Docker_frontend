import React from "react";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
import styles from "./Documents.module.css";
const Documents = () => {
    let token =localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
  return (
    <div>
      <Sidebar />
      <div className={styles.documents}>
        <div className="container ">
          <div
            className={styles.heading}
            style={{ paddingTop: "1%", textAlign: "center" }}
          >
            GENERAL DOCUMENTS
          </div>
          <div class="row">
            <div class="col-12  col-md-4">
              <div
                class={"card text-center  m-5 p-5 shadow " + styles.cards}
                style={{ backgroundColor: "whitesmoke" }}
                onClick={(e) => {
                  fetch(
                    `http://localhost:8080/file/salaryslip.pdf`,
                    config
                  ).then((response) => {
                    response.blob().then((blob) => {
                      const fileURL = window.URL.createObjectURL(blob);
                      let alink = document.createElement("a");
                      alink.href = fileURL;
                      alink.download = "salaryslip.pdf";
                      alink.click();
                    });
                  });
                }}
              >
                <div class="card-body">
                  <h5 class="card-title ">SALARY SLIP</h5>
                </div>
              </div>
            </div>

            <div class="col-12  col-md-4">
              <div
                class={"card text-center  m-5 p-5 shadow " + styles.cards}
                style={{ backgroundColor: "whitesmoke" }}
                onClick={(e) => {
                    fetch(
                      `http://localhost:8080/file/incrementletter.pdf`,
                      config
                    ).then((response) => {
                      response.blob().then((blob) => {
                        const fileURL = window.URL.createObjectURL(blob);
                        let alink = document.createElement("a");
                        alink.href = fileURL;
                        alink.download = "incrementletter.pdf";
                        alink.click();
                      });
                    });
                  }}
              >
                <div class="card-body">
                  <h5 class="card-title ">INCREMENT LETTER</h5>
                </div>
              </div>
            </div>

            <div class="col-12  col-md-4">
              <div
                class={"card text-center  m-5 p-5 shadow " + styles.cards}
                style={{ backgroundColor: "whitesmoke" }}
                onClick={(e) => {
                    fetch(
                      `http://localhost:8080/file/joiningletter.pdf`,
                      config
                    ).then((response) => {
                      response.blob().then((blob) => {
                        const fileURL = window.URL.createObjectURL(blob);
                        let alink = document.createElement("a");
                        alink.href = fileURL;
                        alink.download = "joiningletter.pdf";
                        alink.click();
                      });
                    });
                  }}
              >
                <div class="card-body">
                  <h5 class="card-title ">JOINING LETTER</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
