import React, { useEffect } from 'react';
import './mainView.css';
import { Link } from 'react-router-dom';
import interviewer from '../../image/interviewer.jpg';
import { withRouter } from 'react-router-dom';

const MainView = ({ history, QuestionData, fetchQuestionData, SelectType, nextQuestion }) => {
    
    useEffect(() => {
        fetchQuestionData(SelectType.index);
    },[fetchQuestionData])

    const index = QuestionData.questionNumber;

    if( index < 0 ){
        history.push("Result/");
    }

    return (
        <div className="mainView">
            <div className="container">
                <section className="questionBox">
                    <p className="question">
                        {QuestionData.questions[index]}
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
                        <div className="evaluationButton" ><p>Bad</p></div>
                        <div className="evaluationButton" onClick={ nextQuestion }><p>次の質問</p></div>
                    </div>
                    <Link to="/">トップへ戻る</Link>
                </section>
            </div>
        </div>
    )
}

export default withRouter(MainView);