import React, { PropTypes } from 'react'

import TodoGroup from '../TodoGroup'

const TodoGroupList = ({ lists, onSelect }) => {
  return (
    <ul className='list pl0 ml0 center mw6 ba b--light-silver br2'>
      {lists&&lists.length>0
        ? lists.map((list, i) =>
          <TodoGroup
            key={i}
            {...list}
            onSelect={()=>onSelect(list)}
            isLast={(lists.length - 1) === i}
          />
        )
        : <p className='ph3 pv3 tc'>No list found</p>
      }
    </ul>
  )
}

TodoGroupList.propTypes = {
  lists: PropTypes.array
}

export default TodoGroupList
