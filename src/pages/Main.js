import React from "react";
import "../css/Styles.css";

function Main() {
  return (
    <div className="main-before-login__wrap">
        <div className="main-before-login">
            <div className="main-info">
                <div className="main-info-first">
                    <div className="main-info-first__column">
                        <img src="./nbread-main2.png" className="main__img" />
                    </div>
                    <div className="main-info-first__column">
                        <div className="main-paragragh">
                            <div className="main-paragragh__column">
                                <h1 className="main__title">쉽고 빠르게 N빵!</h1>
                            </div>
                            <div className="main-paragragh__column">
                                <span className="main__text">인원 세고, 가격 보고, 하나하나 계산하기는 이제 지쳤다!</span>
                            </div>
                            <div className="main-paragragh__column">
                                <span className="main__text">더 쉬운 더치페이 생활을 누려보세요.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main;
