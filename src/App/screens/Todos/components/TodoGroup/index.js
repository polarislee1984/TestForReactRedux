import React, { PropTypes } from 'react'

import classNames from 'classnames'

const TodoGroup = ({ name, onSelect, isLast, isSelected }) => {
  const todoClass = classNames(
    'ph3 pv3 pointer bg-animate hover-bg-light-gray',
    {
      'bb b--light-silver': !isLast,
      'bg-light-gray' : isSelected
    }
  )

  return (
    <li className={todoClass} onClick={() => onSelect()}>{name}</li>
  )
}

TodoGroup.propTypes = {
  name: PropTypes.string.isRequired,
  isLast: PropTypes.bool
}

export default TodoGroup
