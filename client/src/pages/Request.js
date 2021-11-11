import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import "../css/Request.css";

export default function Request() {
  const isLogin = useSelector((state) => state.auth);
  const [requestValue, setRequestValue] = useState("");
  const postRequest = () => {
    axios
      .post(
        "http://localhost:8080/noticeBoard",
        {
          content: requestValue,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${isLogin.accessToken}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => window.location.replace("/board"));
  };
  const requestHandler = (e) => {
    setRequestValue(e.target.value);
  };
  return (
    <div className="request-container">
      <form className="request-form">
        <h3>배우 추가 건의</h3>
        <label>내용</label>
        <textarea
          className="request-form-actor"
          placeholder="배우 이름을 적어주세요."
          onChange={requestHandler}
          value={requestValue}
        />
        <Link to="/board">
          <button
            type="submit"
            onClick={postRequest}
            className="request-form-btn"
          >
            요청
          </button>
        </Link>
      </form>
    </div>
  );
}
