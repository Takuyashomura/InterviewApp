import SelectMenu from './SelectMenu';
import { selectInterviewIndex } from '../../redux/interviewType/interviewType_action';
import { resetQuestion } from '../../redux/currentQuestion/currentQuestion_action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ SelectType: state.SelectType });

const mapDispatchToProps = (dispatch) => ({
    setIndex: num => {
        dispatch(selectInterviewIndex( num ))
    },

    resetQuestion: () => {
        dispatch(resetQuestion())
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
    )(SelectMenu);
