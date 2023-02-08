
import React from "react";

import { useState,useEffect } from "react";
import axios from "axios";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./departmentList.module.css";
import { FaSearch, FaUserCircle } from "react-icons/fa";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Button } from "react-bootstrap";
import Sidebar from "../../components/adminSidebar/Sidebar";

export const EditEmployee = () => {

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
      <Sidebar/>
      <div className={styles.all}>
        <div className={styles.departments}>
          <div className={styles.department}> DEPARTMENTS</div>
          <ToggleButtonGroup
            className={styles.toggle}
            color="primary"
            orientation="vertical"
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            {dept1?.map((item, index) => {
              user1 = "Deputy Vice President";
              return (
                <ToggleButton value={item.departmentId}>
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
                to={`/edit/${user2}/${dept?.svp?.id}`}
              >
                <div className={styles.names}>
                  <FaUserCircle size={50} />
                  {"  "}
                  {dept?.svp?.firstName} {dept?.svp?.lastName}
                </div>
              </Link>

<<<<<<< HEAD
              <hr />
=======
    const handleSubmit = (e) => {
      e.preventDefault();
      const employee = {firstName,lastName,gender,username,password,mobileNumber,designation,projectName,moduleName};
      console.log(employee);
      axios.put(`http://localhost:8080/update-employee/${id}`, employee).then((response) => {
          console.log(response);
          alert("Employee Updated");
          window.location.reload("true");
      })
  }

      // const params=useParams();
      // useEffect(()=>{
      //   getEmployeeDetails();
      // },[])
      // const getEmployeeDetails = async()=>{
      //   console.warn(params)
      //   let result = await fetch(`http://localhost:8081/employee/${params.id}`);
      //   result=await result.json;
      //   console.warn(result);
      //   setFirstName(result.firstName);
      //   setLastName(result.lastName);
      //   setGender(result.gender);
      //   setUsername(result.username);
      //   setPassword(result.password);
      //   setDesignation(result.designation);
      //   setMobileNumber(result.mobileNumber);
      //   setProjectName(result.projectName);
      //   setModuleName(result.moduleName);
      // }

      // const UpdateEmployee=async()=>{
      //   console.warn(firstName,lastName,gender,username,password,designation,mobileNumber,projectName,moduleName)
      // }
   
      const [project1, setProject1] = useState([])
      useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(`http://localhost:8080/allprojects`);
              const newData = await response.json();
              setProject1(newData);
              // console.log(newData);
          };
          fetchData();
      }, [])
      const handleChange = (event) => {
          console.log(event.target.value);
          setProject1(event.target.value);
      }

      //Module Names
      const [module1, setModule1] = useState([])
      useEffect(() => {
          const fetchData = async () => {
              const response = await fetch(`http://localhost:8080/module/module`);
              const newData = await response.json();
              setModule1(newData);
              // console.log(newData);
          };
          fetchData();
      }, [])
      const handleChange1 = (event) => {
          console.log(event.target.value);
          setModule1(event.target.value);
      }
  
    return (
      <>
      <Sidebar />
      <div className="employee">
        <div className={styles.addemp}>
          <div className={"card shadow " + styles.cardSetup}>
            <div className={"card-header shadow" + styles.headerCrd}>
              <div className={"text-center " + styles.cartMain}>Edit Employee</div>
>>>>>>> b8609926673b23c36373f00fde5a9659e7ba9d63
            </div>

            <div className={styles.heading}>Deputy Vice President</div>
            <div className={styles.dvp}>
              <Link
                style={{ textDecoration: "none", color: "#15171c",textTransform: "capitalize" }}
                to={`/edit/${user1}/${dept?.dvp?.id}`}
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
                        to={`/edit/${user1}/${item1.id}`}
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
                        to={`/edit/${user1}/${item1.id}`}
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