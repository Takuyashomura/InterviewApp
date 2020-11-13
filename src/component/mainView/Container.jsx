import MainView from './mainView';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ });

const mapDispatchToProps = dispatch => ({

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