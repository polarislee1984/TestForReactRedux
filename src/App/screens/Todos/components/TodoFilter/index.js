import React, { PropTypes } from 'react'

import classNames from 'classnames'

const TodoFilter = ({ onSelect, filter}) => {
  const todoClass = classNames(
    'ph3 pv3 pointer hover-bg-light-gray w-100'
  )

  return (
    <form className='mw6 center br2 ba b--black-10'>
      <fieldset className='cf bn ma0 pa0'>
        <select className='f5-l input-reset fl bg-white pa3 lh-solid w-100 br2 ba b--light-silver' value={filter} onChange={(e) => {
          onSelect(e.target.value)
        }}>
          <option value={''}>All Todos</option>
          <option value={'active'}>Active Todos</option>
          <option value={'completed'}>Completed Todos</option>
        </select>
      </fieldset>
    </form>
  )
}

TodoFilter.propTypes = {
  filter: PropTypes.string.isRequired
}

export default TodoFilter
