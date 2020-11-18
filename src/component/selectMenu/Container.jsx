import SelectMenu from './SelectMenu';
import { currentQuestion } from '../../redux/currentQuestion/currentQuestion_action';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ SelectType: state.SelectType });

const mapDispatchToProps = (dispatch) => ({
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
