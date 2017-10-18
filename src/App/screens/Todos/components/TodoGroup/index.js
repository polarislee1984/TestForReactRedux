import React, { PropTypes } from 'react'

import classNames from 'classnames'

const TodoGroup = ({ text, isLast }) => {
  const todoClass = classNames(
    'ph3 pv3 pointer bg-animate hover-bg-light-gray',
    {
      'bb b--light-silver': !isLast,
    }
  )

  return (
    <li className={todoClass} onClick={() => {}}>{text}</li>
  )
}

TodoGroup.propTypes = {
  text: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}

export default TodoGroup
