import React,{ useRef } from "react";
import Sidebar from "../../../components/employeeSidebar/Sidebar";
import styles from "./AllPolicies.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import Policies from "./Policies";
function AllPolicies() {
    const inputEl = useRef("")
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchKeyword, setsearchKeyword] = useState("");
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [names, setNames] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/documents/names", config).then((response) => {
      setNames(response.data);
    });
  }, []);
  //   console.log(names);


  const getSearchTerm = (e) => {
    e.preventDefault();

     setSearchTerm(e.target.value);
  };
  if (searchTerm.length > 0) {
    console.log(searchTerm)
    names.filter((name) => {
    return name.documentName.match(searchTerm);
});
}


  return (
    <>
      <Sidebar />
      <div className={styles.allpolicies}>
        <div className="container ">
          <div className={styles.heading} style={{ textAlign: "center" }}>
            COMPANY POLICIES
          </div>
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
          {names.filter((name) =>
          name.documentName.toLowerCase().includes(searchTerm.toLowerCase()))
          ?.map((item, index) => {
            return <Policies item={item} index={index}/>;
          })}
        </div>
      </div>
    </>
  );
}

export default AllPolicies;
