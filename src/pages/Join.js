import React from "react";
import "../css/Styles.css";

function Login() {
  return (
    <div className="join-wrap">
      <div className="join">
        <div className="join__column">
          <form method="get" id="join__column-form">
            <fieldset>
              <legend>아이디</legend>
              <input name="id" type="text" />
            </fieldset>
            <fieldset>
              <legend>이메일</legend>
              <input name="email" type="email" />
            </fieldset>
            <fieldset>
              <legend>비밀번호</legend>
              <input name="password" type="password" />
            </fieldset>
            <fieldset>
              <legend>비밀번호 재확인</legend>
              <input name="password" type="password" />
            </fieldset>
            <fieldset>
              <legend>계좌번호</legend>
              <select name="job">
                <option value="">은행 선택</option>
                <option value="NH">NH농협</option>
                <option value="kb">KB국민</option>
                <option value="shinhan">신한</option>
                <option value="woori">우리</option>
                <option value="hana">하나</option>
              </select>
              <input name="account" type="text" placeholder="계좌번호 입력" />
            </fieldset>
            <input
              id="join-submit"
              name="join-submit"
              type="submit"
              value="가입하기"
              onclick="location.href='mainBeforeLogin.html'"
            />
          </form>
        </div>
        <div className="join__column">
          <hr />
        </div>
        <div className="join__column">
          <fieldset className="join__column__other-join">
            <legend>다른 서비스 계정으로 가입</legend>
            <button>Google</button>
            <button>Kakao</button>
          </fieldset>
        </div>
      </div>
    </div>
  );
}

export default Login;
