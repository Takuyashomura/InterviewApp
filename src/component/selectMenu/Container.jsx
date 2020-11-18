import SelectMenu from './SelectMenu';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ SelectType: state.SelectType });

const mapDispatchToProps = (dispatch, { router }) => ({
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
