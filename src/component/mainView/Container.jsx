import MainView from './mainView';
import { currentQuestion, resetQuestion, questionNumber, questionNumberDecrement } from '../../redux/currentQuestion/currentQuestion_action';
import { addShuffleQuestionData } from '../../service/question';
import { resetIndex } from '../../redux/interviewType/interviewType_action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ QuestionData: state.QuestionData, SelectType: state.selectType });

const mapDispatchToProps = dispatch => ({
    addCurrentQuestion: data  => {
        dispatch( currentQuestion( data ) )
    },

    fetchQuestionData: num => {
        dispatch(resetQuestion());
        dispatch( questionNumber(num) );
        dispatch( addShuffleQuestionData( num ) );
        dispatch(resetIndex());
    },

    nextQuestion: () => {
        dispatch( questionNumberDecrement() );
    }
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MainView);