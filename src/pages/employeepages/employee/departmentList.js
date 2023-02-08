import React from "react";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
import styles from "./departmentList.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
function DepartmentList() {
  const [user, setUser] = useState("employee");
  var user2 = "Senior Vice President";
  var user1 = "";
  const [searchTerm, setSearchTerm] = useState("");
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [dept1, setDept1] = useState();
  const [dept, setDept] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/department/1", config).then((response) => {
      setDept(response.data);
    });
    axios.get("http://localhost:8080/department/", config).then((response) => {
      setDept1(response.data);
    });
  }, []);

  const handleChange = (e) => {
    axios
      .get(`http://localhost:8080/department/${e.target.value}`, config)
      .then((response) => {
        setDept(response.data);
      });
  };

  return (
    <>
      <Sidebar />
      <div className={styles.all}>
        <div className={styles.departments}>
          <div className={styles.department}> DEPARTMENTS</div>
          <ToggleButtonGroup
            className={styles.toggle}
            color="secondary"
            orientation="vertical"
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            {dept1?.map((item, index) => {
              user1 = "Deputy Vice President";
              return (
                <ToggleButton  value={item.departmentId} >
                  {item.departmentName}
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup>
        </div>
        <div>
          <div className={"container  " + styles.List}>
            <div className={styles.heading1}>ALL EMPLOYEES</div>
            <div className={styles.heading}>Senior Vice President</div>
            <div className={styles.svp}>
              <Link
                style={{ textDecoration: "none", color: "#15171c" ,textTransform: "capitalize" }}
                to={`/${user2}/${dept?.svp?.id}`}
              >
                <div className={styles.names}>
                  <FaUserCircle size={50} />
                  {"  "}
                  {dept?.svp?.firstName} {dept?.svp?.lastName}
                </div>
              </Link>

              <hr />
            </div>

            <div className={styles.heading}>Deputy Vice President</div>
            <div className={styles.dvp}>
              <Link
                style={{ textDecoration: "none", color: "#15171c",textTransform: "capitalize" }}
                to={`/${user1}/${dept?.dvp?.id}`}
              >
                <div className={styles.names}>
                  <FaUserCircle size={50} />
                  {"  "}
                  {dept?.dvp?.firstName} {dept?.dvp?.lastName}
                </div>
              </Link>

              <hr />
            </div>

            <div className={styles.search}>
              <div>
                <input
                  className={styles.input}
                  type="search"
                  placeholder="Search Employees"
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                />
                <FaSearch className={styles.icon} />
              </div>
            </div>
            <div className={styles.heading}>Other Employees</div>
            <div className={styles.empList}>
              {dept?.employees
                ?.filter((emp) =>
                  emp.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                )
                ?.map((item1, index) => {
                  user1 = "employee";

                  return (
                    <>
                      <Link
                        style={{ textDecoration: "none", color: "#15171c" ,textTransform: "capitalize" }}
                        to={`/${user1}/${item1.id}`}
                        key={index}
                      >
                        <div className={styles.names}>
                          <FaUserCircle size={50} />
                          {"  "}
                          {item1?.firstName} {item1?.lastName}
                        </div>
                      </Link>

                      <hr />
                    </>
                  );
                })}
              {dept?.managers
                ?.filter((emp) =>
                  emp.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                )
                ?.map((item1, index) => {
                  user1 = "Assistant Vice President";
                  return (
                    <>
                      <Link
                        style={{ textDecoration: "none", color: "#15171c",textTransform: "capitalize" }}
                        to={`/${user1}/${item1.id}`}
                        key={index}
                      >
                        <div className={styles.names}>
                          <FaUserCircle size={50} />
                          {"  "}
                          {item1?.firstName} {item1?.lastName}
                        </div>
                      </Link>

                      <hr />
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DepartmentList;
