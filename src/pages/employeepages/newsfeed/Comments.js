import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./NewsFeed.module.css";
import { IoSend } from "react-icons/io5";
import { FaComment, FaUserCircle } from "react-icons/fa";
import Collapse from "react-bootstrap/Collapse";
function Comment(props) {
  let token = localStorage.getItem("token");
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const [open, setOpen] = useState(false);
  const [comment, setComment] = useState({
    message: "",
    feedId: props.posts.newsFeedId,
  });
  function postComment(e) {
    e.preventDefault();
    console.log(comment);
    axios
      .post("http://localhost:8080/employee/comment/add", comment, config)
      .then((response) => {
        // alert(response.data);
        window.location.reload(true);

        // navigate("/newsfeed");
      });
  }
  return (
    <div className={"col-12" + styles.main}>
      <div className={styles.news}>
        <h5 className="description">{props.posts.description}</h5>
        <img src={props.posts.imageUrl} className={styles.img} alt="..." />

        <p
          className="btn"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          <FaComment
          // class="btn btn-danger"
          ></FaComment>{" "}
          Comment
        </p>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <div class="card card-body">
              <div>
                <label className="form-label" for="textAreaExample">
                  Write a comment
                </label>

                <textarea
                  className="form-control"
                  id="textAreaExample"
                  rows="2"
                  value={comment.message}
                  onChange={(e) =>
                    setComment({ ...comment, message: e.target.value })
                  }
                ></textarea>
              </div>

              <p
                class="btn btn-outline-dark mt-3"
                onClick={(e) => {
                  postComment(e);
                }}
              >
                <IoSend></IoSend> Send
              </p>
              {props.posts.comments?.map((item1, index1) => {
                return (
                  <div>
                    <div className="row ml-3" key={index1}>
                      {item1?.employee && (
                        <>
                          <h5 className={styles.itemDes}>
                            <FaUserCircle /> {item1?.employee?.firstName}{" "}
                            {item1?.employee?.lastName}
                          </h5>
                        </>
                      )}
                      {item1?.avp && (
                        <>
                      <h5 className={styles.itemDes}>
                      <FaUserCircle/> {item1?.avp?.firstName} {item1?.avp?.lastName}
                      </h5>
                      </>
                      )}
                      {item1?.dvp && (
                        <>
                      <h5 className={styles.itemDes}>
                      <FaUserCircle/> {item1?.dvp?.firstName} {item1?.dvp?.lastName}
                      </h5>
                      </>
                      )}
                      {item1?.svp && (
                        <>
                      <h5 className={styles.itemDes}>
                      <FaUserCircle size={40}/> {item1?.svp?.firstName} {item1?.svp?.lastName}
                      </h5>
                      <p className={styles.itemName}>{item1?.message}</p>
                      <hr />
                      </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  );
}

export default Comment;
