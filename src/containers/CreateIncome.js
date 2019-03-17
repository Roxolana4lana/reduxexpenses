import { connect } from 'react-redux'
import { createIncome } from '../actions'
import NewIncome from '../components/NewIncome'

const mapDispatchTpProps = dispatch => {
    return {
        onAddIncome: income => {
            dispatch(createIncome(income))
        }
    }
}
export default connect(null, mapDispatchTpProps)(NewIncome)