import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import * as actions from 'App/stores/resources/actions'
import { getEntities, getChildEntities } from 'App/stores/resources'

import AddList from './components/AddList'
import TodoGroupList from './components/TodoGroupList'

import AddTodo from './components/AddTodo'

import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

let selectedListId = null;
const Todos = ({ lists, addList, selectedId, todos, addTodo, toggleTodo, filterTodo, filter, selectedList, selectList }) => {
  selectedListId = selectedId
  return (
    <section className="pa3">
      <div className="fl w-50 tc">
        <AddList onSubmit={({list}, _, {reset}) => {
          addList(list)
          reset()
        }} />
        <TodoGroupList {...{ lists, selectedListId}} onSelect={(list)=>{
          selectList(list.id)
        }}/>
      </div>
      {selectedId&&<div className="fl w-50 tc">
        <AddTodo onSubmit={({todo}, _, {reset}) => {
          addTodo(todo)
          reset()
        }} />

        <TodoFilter filter={filter?filter.filter:''} onSelect={(status)=>{
          filterTodo(status)
        }}/>
        <TodoList {...{ todos, toggleTodo}} />
      </div>}
    </section>
  )
}

Todos.propTypes = {
  lists:PropTypes.array,
  todos: PropTypes.array
}

export default connect(
  state => ({
    lists:getEntities('lists')(state),
    todos: getChildEntities('todos', 'lists', (state['lists'].selectedId?state['lists'].selectedId.selectedId:null))(state),
    filter:state['todos'].filter,
    selectedId:(state['lists'].selectedId?state['lists'].selectedId.selectedId:null),
  }),
  dispatch => ({
    addTodo: (text) => dispatch(actions.submitEntity({ text, listID:selectedListId }, {type: 'todos'})),
    addList: (name) => dispatch(actions.submitEntity({ name }, {type: 'lists'})),
    toggleTodo: (todo, completed) => dispatch(actions.updateEntity({ ...todo, completed }, {type: 'todos'})),
    filterTodo: (filter) => dispatch(actions.setFilter({type: 'todos', filter:filter})),
    selectList: (id) => dispatch(actions.selectList({type: 'lists', id:id})),
  })
)(Todos)
