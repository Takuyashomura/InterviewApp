import SelectMenu from './SelectMenu';
import { selectInterviewIndex } from '../../redux/interviewType/interviewType_action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ SelectType: state.selectType});

const mapDispatchToProps = dispatch => ({
    setIndex: num => {
        dispatch(selectInterviewIndex( num ));
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
