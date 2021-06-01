import React, { useState } from "react";
import { Link } from "react-router-dom";

function Mypage() {
    const [thisPage, setThisPage] = useState("");

    return (
        <div className="mypage-wrap">
            <div className="mypage">
                <div className="mypage__column">
                    <button>
                        <Link to="/post" className="" onClick={() => setThisPage("Post")}>
                            결제 게시글 작성하기
                        </Link>
                    </button>
                    <button>
                        <Link to="/pay" className="" onClick={() => setThisPage("Pay")}>
                            결제하기
                        </Link>
                    </button>
                </div>
                
                <div className="mypage__column">
                    <h1>계좌 관리</h1>
                    <div className="mypage__column-account"></div>
                </div>

                <div className="mypage__column">
                    <h1>작성한 게시물</h1>
                    <div className="mypage__column-post"></div>
                </div>
            </div>
        </div>
    )
}

export default Mypage
