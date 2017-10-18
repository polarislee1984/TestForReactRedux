import React, { PropTypes } from 'react'

import TodoGroup from '../TodoGroup'

const TodoGroupList = ({ groups }) => {
  return (
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
      {groups
        ? groups.map((group, i) =>
          <TodoGroup
            key={i}
            {...group}
            isLast={(groups.length - 1) === i}
          />
        )
        : <p className='ph3 pv3 tc'>No list found</p>
      }
    </ul>
  )
}

TodoGroupList.propTypes = {
  groups: PropTypes.array
}

export default TodoGroupList
