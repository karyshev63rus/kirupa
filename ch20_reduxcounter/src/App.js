import { connect } from 'react-redux'
import Counter from './Counter'

function mapStateToProps (state) {
    return {
        countValue: state.count
    }
}

let increaseAction = {type: 'increase'}
let decreaseAction = {type: 'decrease'}

function mapDispatchToProps (dispatch) {
    return {
        increaseCount: function () {
            dispatch(increaseAction)
        },
        decreaseCount: function () {
            dispatch(decreaseAction)
        }
    }
}

let connectedComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

export default connectedComponent