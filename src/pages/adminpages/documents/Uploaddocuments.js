import React from "react";
import Sidebar from "../../../components/adminSidebar/Sidebar";
import styles from "./Uploaddocuments.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Uploaddocuments = () => {
  const [searchValue, setSearchValue] = useState("");
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [state, setState] = useState({
    file: "",
  });
  const [empId, setEmpId] = useState();
  function handleFile(e) {
    let file = e.target.files[0];
    setState({ ...state, file: file });
  }

  function uploadDocuments(e) {
    let file = state.file;

    let formdata = new FormData();
    console.log(file);
    formdata.append("file", file);
    formdata.append("emp", empId);
    console.log(formdata.documentId);
    axios({
      url: "http://localhost:8080/file/upload",
      method: "POST",
      data: formdata,
    }).then((response) => {
      alert("Document Uploaded Successfully");
      window.location.reload(true);
    });
  }

  const [depts, setDepts] = useState([]);
  const [dept, setDept] = useState();
  useEffect(() => {
    axios.get(`http://localhost:8080/department/`, config).then((response) => {
      setDepts(response.data);
      axios
        .get("http://localhost:8080/department/1", config)
        .then((response) => {
          setDept(response.data);
        });
    });
  }, []);


  // const handleChange = (e) => {
  //   setSearchValue(e.target.value);
  //   setShowDropdown(true);
  // };


  return (
    <>
      <Sidebar />
      <div className={styles.docs}>
        <div className={"card shadow " + styles.cardSetup}>
          <div className={"card-header shadow" + styles.headerCrd}>
            <div className={"text-center " + styles.cartMain}>
              UPLOAD DOCUMENTS
            </div>
          </div>

          <div
            className={"card-body shadow" + styles.cardBody}
            data-bs-spy="scroll"
            data-bs-target="#navbar-example"
          >
            <div className="card-text" id="navbar-example"></div>
            <div className="container">
              <form>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                    Employee's Email
                  </label>
                  {/* <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    value={empId}
                    required
                    onChange={(e) => setEmpId(e.target.value)}
                  /> */}

                  <select
                    className="form-control"
                    value={empId}
                    onChange={(e) =>
                      setEmpId(e.target.value)
                    }
                    
                  >
                    <option value="">Choose Email</option>

                    <option value={dept?.svp?.username} key={dept?.svp?.id}>
                      {dept?.svp?.username}
                    </option>

                    {depts.map((dept) => (
                      <>
                        <option value={dept?.dvp?.username} key={dept?.dvp?.id}>
                          {dept?.dvp?.username}
                        </option>

                        {dept.managers.map((emp) => (
                          <option value={emp.username} key={emp.id}>
                            {emp.username}
                          </option>
                        ))}
                        {dept.employees.map((emp) => (
                          <option value={emp.username} key={emp.id}>
                            {emp.username}
                          </option>
                        ))}
                      </>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail2" className="form-label">
                    Document
                  </label>
                  <input
                    type="file"
                    className="form-control"
                    id="exampleInputEmail2"
                    required
                    onChange={(e) => handleFile(e)}
                  />
                </div>

                <button
                  type="submit"
                  class="btn btn-danger"
                  style={{ float: "right", backgroundColor: "#97144d" }}
                  onClick={(e) => {
                    uploadDocuments(e);
                  }}
                >
                  UPLOAD
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Uploaddocuments;
