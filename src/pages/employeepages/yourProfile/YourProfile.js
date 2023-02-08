import React from "react";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
import styles from "./YourProfile.module.css";
import { useState, useEffect, useNavigate } from "react";
import axios from "axios";
import { FaFileDownload } from "react-icons/fa";
function YourProfile() {
  // const navigate = useNavigate();
  const [designation, setDesignation] = useState();
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/employee/`, config).then((response) => {
      console.log(response.data);
      if (response.data.designation == "Assistant Vice President")
        setDesignation("Assistant Vice President");
      else if (response.data.designation == "Deputy Vice President")
        setDesignation("Deputy Vice President");
      if (response.data.designation == "Senior Vice President")
        setDesignation("Senior Vice President");
      else setDesignation("employee");
      setEmp(response.data);
      console.log(response.data.designation)
    });
  }, []);
  return (
    <>
      <Sidebar />
      <div className={styles.yourprofile}>
        <div className={styles.profile}>
          <div className={"card "} >
            <img
              src={`http://localhost:8080/profile-image/${emp.username}`}
              className={styles.img}
              alt=""
            />
            <div className="card-body mb-1">
              <div className={styles.name}>
                {emp.firstName} {emp.lastName}
              </div>

              <hr />

              <div className={styles.id}>Employee ID</div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.id}</div>

              <div className={styles.id}>Designation</div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.designation}</div>

              {emp.designation !== "Senior Vice President" && (
                <>
                  <div className={styles.id}>Reporting Manager</div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.eid}>
                    {emp?.manager?.firstName} {emp?.manager?.lastName}
                    {emp?.dvp?.firstName} {emp?.dvp?.lastName}
                    {emp?.svp?.firstName} {emp?.svp?.lastName}
                  </div>
                </>
              )}

              {emp?.projectName && emp?.projectName !== " " &&(
                <>
                  <div className={styles.id}>Project</div>
                  <div className={styles.colon}>:</div>
                  <div className={styles.eid}>{emp.projectName}</div>
                </>
              )}
              <div className={styles.id}>Branch Name </div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.branchName}</div>

              <div className={styles.id}>gender</div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.gender}</div>

              <div className={styles.id}>Mobile Number</div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.mobileNumber}</div>

              <div className={styles.id}>Email</div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.username}</div>

              <div className={styles.id}>City </div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.city}</div>

              <div className={styles.id}>State </div>
              <div className={styles.colon}>:</div>
              <div className={styles.eid}>{emp.state}</div>
            </div>
          </div>
        </div>
        {/* <div className={styles.crd}>
          <div class="list-group">
            <div className={styles.download}>
              Download
              <FaFileDownload />{" "}
            </div>

            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "Assistant Vice President") {
                  fetch(
                    `http://localhost:8080/Assistant Vice President/files/salaryslip.pdf`,
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
                } else if (designation == "Deputy Vice President") {
                  fetch(
                    `http://localhost:8080/Deputy Vice President/files/salaryslip.pdf`,
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
                } else if (designation == "Senior Vice President") {
                  fetch(
                    `http://localhost:8080/Senior Vice President/files/salaryslip.pdf`,
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
                } else
                  fetch(
                    `http://localhost:8080/employee/files/salaryslip.pdf`,
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
              Salary Slip
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "Assistant Vice President") {
                  fetch(
                    `http://localhost:8080/Assistant Vice President/files/incrementletter.pdf`,
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
                } else if (designation == "Deputy Vice President") {
                  fetch(
                    `http://localhost:8080/Deputy Vice President/files/incrementletter.pdf`,
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
                } else if (designation == "Senior Vice President") {
                  fetch(
                    `http://localhost:8080/Senior Vice President/files/incrementletter.pdf`,
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
                } else
                  fetch(
                    `http://localhost:8080/employee/files/incrementletter.pdf`,
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
              Increment Letter
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              onClick={(e) => {
                if (designation == "Assistant Vice President") {
                  fetch(
                    `http://localhost:8080/Assistant Vice President/files/joiningletter.pdf`,
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
                } else if (designation == "Deputy Vice President") {
                  fetch(
                    `http://localhost:8080/Deputy Vice President/files/joiningletter.pdf`,
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
                } else if (designation == "Senior Vice President") {
                  fetch(
                    `http://localhost:8080/Senior Vice President/files/joiningletter.pdf`,
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
                } else
                  fetch(
                    `http://localhost:8080/employee/files/joiningletter.pdf`,
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
              Joining Letter
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default YourProfile;
