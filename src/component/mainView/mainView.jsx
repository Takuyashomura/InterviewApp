import React from 'react';
import './mainView.css';
import { Link } from 'react-router-dom';
import interviewer from '../../image/interviewer.jpg';

const MainView = () => {
    return (
        <div className="mainView">
            <div className="container">
                <section className="questionBox">
                    <p className="question">
                        テストテストテストテストテストテストテストテストテスト
                        テストテストテストテストテストテストテストテストテスト
                        テテストテストテストテストテテストテストテストテストテテストテストテストテストテテストテストテストテストテテストテストテストテストテ
                    </p>
                </section>
            </div>
            <div className="container">
                <section className="imageBox">
                    <div>
                        <img src={interviewer} alt="面接官"></img>
                    </div>
                </section>
            </div>
            <div className="container">
                <section className="evaluationButtonBox">
                    <div className="flex">
                        <div className="evaluationButton"><p>Bad</p></div>
                        <div className="evaluationButton"><p>Good</p></div>
                    </div>
                    <Link to="/">トップへ戻る</Link>
                </section>
            </div>
        </div>
    )
}

export default MainView;