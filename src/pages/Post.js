import React, { useState } from 'react'

function Post() {
    const [price, setPrice] = useState(0);
    const [num, setNum] = useState(0);
    let [result, setResult] = useState(String(parseInt(price / num)));
    /*
    if (isNaN(result)) {
        result = 0;
    }
    */
    return (
        <div className="post-wrap">
            <div className="post">
                <div className="post__column">
                    <form method="get" id="post__column-form">
                        <fieldset>
                            <legend>결제명</legend>
                            <input name="pay_name" type="text" />
                        </fieldset>
                        <fieldset>
                            <legend>금액</legend>
                            <input name="pay_price" type="number" value={price} onChange={e => setPrice(+e.target.value)} placeholder="0" />
                        </fieldset>
                        <fieldset>
                            <legend>인원</legend>
                            <input name="pay_num" type="number" value={num} onChange={e => setNum(+e.target.value)} placeholder="0" />
                        </fieldset>
                    </form>
                </div>
                <div className="post__column">
                    <hr />
                </div>
                <div className="post__column">
                    <p>최종 금액</p>
                    <input name="pay_result" type="text" value={result} onChange={e => setResult(+e.target.value)} placeholder="0" readOnly />
                </div>
                <div className="post__column">
                <fieldset className="post__column__other-post">
                    <button>공유하기</button>
                </fieldset>
                </div>
            </div>
        </div>
    )
}

export default Post
