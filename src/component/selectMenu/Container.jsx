import SelectMenu from './SelectMenu';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ SelectType: state.SelectType });

const mapDispatchToProps = (dispatch, { router }) => ({
});

const mergeProps = ( stateProps, dispatchProps ) => ({
    ...stateProps,
    ...dispatchProps
});

export default withRouter(connect( 
    mapStateToProps, 
    mapDispatchToProps,
    mergeProps
    )(SelectMenu));
