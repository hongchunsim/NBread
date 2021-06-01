import React from "react";
import "../css/Styles.css";

function Login() {
  return (
    <div className="login-wrap">
      <div className="login">
        <div className="login__column">
          <form method="get" id="login__column-form">
            <fieldset>
              <legend>아이디</legend>
              <input name="id" type="text" />
            </fieldset>
            <fieldset>
              <legend>비밀번호</legend>
              <input name="password" type="password" />
            </fieldset>
            <input
              id="login-submit"
              name="login-submit"
              type="submit"
              value="로그인"
              onclick="location.href='mainAfterLogin.html'"
            />
          </form>
        </div>
        <div className="login__column">
          <hr />
        </div>
        <div className="login__column">
          <fieldset className="login__column__other-login">
            <legend>다른 서비스 계정으로 로그인</legend>
            <button>Google</button>
            <button>Kakao</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Login;
