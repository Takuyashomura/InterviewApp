import MainView from './mainView';
import { currentQuestion, fetchQuestionData } from '../../redux/currentQuestion/currentQuestion_action';
import { addShuffleQuestionData } from '../../service/question';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ SelectType: state.selectType });

const mapDispatchToProps = dispatch => ({
    fetchQuestionData: num => {
        dispatch( addShuffleQuestionData( num ) );
    },

    addCurrentQuestion: ( data ) => {
        dispatch( currentQuestion( data ) )
    }
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps
});

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(MainView));