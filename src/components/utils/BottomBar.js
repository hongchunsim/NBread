import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Styles.css";

function BottomBar() {
  const [thisPage, setThisPage] = useState("");
  return (
    <footer className="bottom-bar">
        <div className="bottom-bar__column">
            <div className="bottom-bar__column-title">
                <Link to="/notice" className="bottom-bar__link" onClick={() => setThisPage("notice")}>공지사항</Link>
            </div>
            <div className="bottom-bar__column-title">
                <Link to="/qna" className="bottom-bar__link" onClick={() => setThisPage("qna")}>Q&A</Link>
            </div>
        </div>
        
        <div className="bottom-bar__column">
            <div class="bottom-bar__column-copyright">
                <span>Copyright © DevDogs. All rights reserved.</span>
            </div>
        </div>
    </footer>
  );
}

export default BottomBar;
