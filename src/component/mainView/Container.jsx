import MainView from './mainView';
import { currentQuestion, fetchQuestionData } from '../../redux/currentQuestion/currentQuestion_action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ SelectType: state.SelectType });

const mapDispatchToProps = dispatch => ({
    fetchQuestions: ( dataArray ) => {
        dispatch( fetchQuestionData( dataArray ) );
    },

    addQuestion: ( data ) => {
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