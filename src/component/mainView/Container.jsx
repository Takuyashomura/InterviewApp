import MainView from './mainView';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({

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