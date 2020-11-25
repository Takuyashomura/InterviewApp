import ResultView from './ResultView';
import { connect } from 'react-redux';
import { questionNumber } from '../../redux/currentQuestion/currentQuestion_action';

const mapStateToProps = state => ({QuestionData: state.QuestionData});

const mapDispatchToProps = dispatch => ({
    resetQuestionNumber: () => {
        dispatch( questionNumber(1) )
    }
})

const mergeProps = (stateProps, dispatchProps) => ({
    ...stateProps,
    ...dispatchProps
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ResultView);