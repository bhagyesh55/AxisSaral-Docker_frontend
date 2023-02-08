import React from "react";
import styles from "../../adminpages/employee.module.css";
import { useState,useEffect } from "react";
import axios from "axios";
import Sidebar from "../../../components/adminSidebar/Sidebar";
import { useParams } from "react-router-dom";

export const UpdateEmployeeProfile = () => {
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

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    username: "",
    mobileNumber: 0,
    designation: "",
    projectName: "",
    moduleName: "",
  });


    const handleSubmit = (e) => {
      e.preventDefault();
      
      
    console.log(emp);
      axios.put(`http://localhost:8080/update/${params.user}/${params.id}`, emp).then((response) => {
          
          alert("Employee Updated");
          //window.location.reload("true");
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
              const response = await fetch(`http://localhost:8080/allmodules`);
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

      const click = (e)=>{
        e.preventDefault();
        console.log(emp.firstName)
        
      }
  
    return (
      <>
      <Sidebar/>
      <div className="employee">
        <div className={styles.addemp}>
          <div className={"card shadow " + styles.cardSetup}>
            <div className={"card-header shadow" + styles.headerCrd}>
              <div className={"text-center " + styles.cartMain}>Edit Employee</div>
            </div>
  
            <div
              className={"card-body shadow" + styles.cardBody}
              data-bs-spy="scroll"
              data-bs-target="#navbar-example"
            >
              <div className="card-text" id="navbar-example"></div>
              <div className="container">
                <form>
                
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.firstName}
                      required
                      onChange={(e) =>
                        setEmp({...emp,firstName:e.target.value})
                      }
                      
                      
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.lastName}
                      required
                      onChange={(e) =>
                        setEmp({...emp,lastName:e.target.value})
                      }
                    />
                  </div>
                  
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Mobile Number
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.mobileNumber}
                      required
                      onChange={(e) =>
                        setEmp({...emp,mobileNumber:e.target.value})
                      }
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Branch Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.branchName}
                      required
                      onChange={(e) =>
                        setEmp({...emp,branchName:e.target.value})
                      }
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.city}
                      required
                      onChange={(e) =>
                        setEmp({...emp,city:e.target.value})
                      }
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      State
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.state}
                      required
                      onChange={(e) =>
                        setEmp({...emp,state:e.target.value})
                      }
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Reporting Manager
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputEmail1"
                      defaultValue={emp.designation} //check this...
                      required
                      onChange={(e) =>
                        setEmp({...emp,designation:e.target.value})
                      }
                    />
                  </div>







                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Project Name
                    </label>
                    
                    <select className="form-control" defaultValue={emp.projectName} onChange={(e) =>
                        setEmp({...emp,projectName:e.target.value})
                      }>
                    {/* <option defaultValue={emp.projectName}>{emp.projectName}</option> */}
  
                          {project1.map(project => (
                              <option value={project.projectName} key={project.id} >{project.projectName}</option>
                              ))
                          }
                    </select>
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">
                      Module Name
                    </label>
                    <select className="form-control" defaultValue={emp.moduleName} onChange={(e) =>
                        setEmp({...emp,moduleName:e.target.value})
                      } >
                          {module1.map(module => (
                              <option value={module.moduleName} key={module.id} >{module.moduleName}</option>
                              ))
                          }
                    </select>

                  </div>
                  
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={(e)=>{handleSubmit(e)}}
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
}