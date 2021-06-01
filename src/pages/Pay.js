import React from 'react'

function Pay() {
    return (
        <div className="pay-wrap">
            <div className="pay">
                <div className="pay__column">
                    <div className="pay__column-list">
                        <p className="pay__column-title">결제명</p>
                        <p className="pay__column-result">신전</p>
                    </div>
                    <div className="pay__column-list">
                        <p className="pay__column-title">총 금액</p>
                        <p className="pay__column-result">12000</p>
                    </div>
                    <div className="pay__column-list">
                        <p className="pay__column-title">N빵 인원</p>
                        <p className="pay__column-result">3</p>
                    </div>
                </div>
                    
                
                <hr />
                

                <div className="pay__column">
                    <div className="pay__column-list">
                        <p className="pay__column-title">최종 금액</p>
                        <p className="pay__column-result">12000</p>
                    </div>
                </div>

                <hr />

                <div className="pay__column">
                    <div className="pay__column-form">
                        <p className="pay__column-title">입금인</p>
                        <input className="pay__column-dep" type="text"></input>
                    </div>
                    <div className="pay__column-form">
                        <p className="pay__column-title">계좌 선택</p>
                        <select name="job">
                            <option value="">은행 선택</option>
                            <option value="NH">NH농협</option>
                            <option value="kb">KB국민</option>
                            <option value="shinhan">신한</option>
                            <option value="woori">우리</option>
                            <option value="hana">하나</option>
                        </select>
                        <input className="pay__column-dep" type="number" placeholder="기호 없이 계좌 번호만 입력"></input>
                    </div>
                </div>

                <div className="pay__column">
                    <div className="pay__column__other-pay">
                        <button>결제하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pay
