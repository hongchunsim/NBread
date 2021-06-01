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
            to="/"
            className="top-bar__link"
            onClick={() => setThisPage("Main")}
          >
            로그아웃
          </Link> 
          <Link
            to="/mypage"
            className="top-bar__link"
            onClick={() => setThisPage("Mypage")}
          >
            마이페이지
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
