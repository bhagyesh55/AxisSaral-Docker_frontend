import React from "react";
import styles from "./employeeProfile.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../../../components/employeeSidebar/Sidebar";

function EmployeeProfile() {
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const params = useParams();
  const [emp, setEmp] = useState([]);
  useEffect(() => {
    const setID = params.id;

    axios
      .get(`http://localhost:8080/${params.user}/${setID}`, config)
      .then((response) => {
        setEmp(response.data);
      });
  }, []);

  return (
    <>
      <Sidebar />
      <div className={styles.profile}>
        <div className={"card "}>
          <img
            src={`http://localhost:8080/profile-image/${emp.username}`}
            className={styles.img}
            alt="..."
          />
          <div className="card-body mb-1">
            <div className={styles.name}>
              {emp.firstName} {emp.lastName}
            </div>

            <hr />
            {emp.designation == "Senior Vice President" && (
              <>
                <div className={styles.id}>SVP ID</div>
                <div className={styles.colon}>:</div>
                <div className={styles.eid}>{emp.id}</div>
              </>
            )}
            {emp.designation == "Deputy Vice President" && (
              <>
                <div className={styles.id}>DVP ID</div>
                <div className={styles.colon}>:</div>
                <div className={styles.eid}>{emp.id}</div>
              </>
            )}
            {emp.designation == "Assistant Vice President" && (
              <>
                <div className={styles.id}>AVP ID</div>
                <div className={styles.colon}>:</div>
                <div className={styles.eid}>{emp.id}</div>
              </>
            )}
            {emp.designation !== "Assistant Vice President" && emp.designation !== "Deputy Vice President" && emp.designation !== "Senior Vice President" &&(
              <>
                <div className={styles.id}>Employee ID</div>
                <div className={styles.colon}>:</div>
                <div className={styles.eid}>{emp.id}</div>
              </>
            )}
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

            {emp?.projectName && (
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
    </>
  );
}

export default EmployeeProfile;
