import React,{useEffect} from 'react';
import './ResultView.css';
import { Link } from 'react-router-dom';

const ResultView = ({QuestionData, resetQuestionNumber}) => {
    useEffect(() => {
        resetQuestionNumber();
    },[resetQuestionNumber])
    if( !QuestionData.notGoodQuestion[0] ){

        return(
            <div className="resultView">
                <h1>お疲れ様でした！</h1>
                <Link to="/">トップページ</Link>
            </div>
        )
    } else {

        return(
            <div className="resultView">
                <table>
                <tr>
                    <th>苦手な質問</th>
                </tr>
                {QuestionData.notGoodQuestion.map( ( question, i ) => {
                return(
                <tr>
                    <td key={i}>{ question }</td>
                </tr>
                )
                })}
                </table>
                <Link to="/">トップページ</Link>
            </div>
        )
    }
    
}

export default ResultView;