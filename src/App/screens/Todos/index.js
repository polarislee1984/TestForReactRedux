import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from 'App/stores/resources/actions'
import { getEntities } from 'App/stores/resources'

import AddTodo from './components/AddTodo'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

const Todos = ({ todos, addTodo, toggleTodo, filterTodo, filter }) => {

  return (
    <section className='pa3 pa5-ns'>

      <AddTodo onSubmit={({todo}, _, {reset}) => {
        addTodo(todo)
        reset()
      }} />

      <TodoFilter filter={filter?filter.filter:''} onSelect={(status)=>{
        filterTodo(status)
      }}/>
      <TodoList {...{ todos, filter, toggleTodo }} />
    </section>
  )
}

Todos.propTypes = {
  todos: PropTypes.array
}

export default connect(
  state => ({
    todos: getEntities('todos')(state),
    filter:state['todos'].filter
  }),
  dispatch => ({
    addTodo: (text) => dispatch(actions.submitEntity({ text }, {type: 'todos'})),
    toggleTodo: (todo, completed) => dispatch(actions.updateEntity({ ...todo, completed }, {type: 'todos'})),
    filterTodo: (filter) => dispatch(actions.setFilter({type: 'todos', filter:filter}))
  })
)(Todos)
