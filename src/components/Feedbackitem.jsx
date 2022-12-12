import { FaTimes, FaEdit } from 'react-icons/fa'
import {useContext} from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import FeedbackContext from '../context/FeedbackContext'

function Feedbackitem({ item }) {

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext)

    return (
    <Card reverse={true}>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)}
        className="close">
        <FaTimes color='yellow' />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color='yellow' />
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default Feedbackitem
