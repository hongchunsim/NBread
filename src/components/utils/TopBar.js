import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Styles.css";

function TopBar() {
  const [thisPage, setThisPage] = useState("");
  return (
    <nav className="top-bar__wrap">
      <div className="top-bar">
        <div className="top-bar__column">
          <Link to="/" className="nav-link" onClick={() => setThisPage("Main")}>
            <h1 className="logo">NBread</h1>
          </Link>
        </div>
        <div className="top-bar__column">
          <Link
            to="/login"
            className="top-bar__link"
            onClick={() => setThisPage("login")}
          >
            로그인
          </Link> 
          <Link
            to="/join"
            className="top-bar__link"
            onClick={() => setThisPage("join")}
          >
            회원가입
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
