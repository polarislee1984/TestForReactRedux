/*
  This is a combination of some generic reducers
  which can be used with any "resource".

  A "resource" is a model of data that is usually
  fetched from the API.
 */

import { combineReducers } from 'redux'
import { createSelector } from 'reselect'

import byId, * as fromById from './byId'
import idsList, * as fromIdsList from './idsList'
import status, * as fromStatus from './status'
import filter from './filter'
import pagination, * as fromPagination from './pagination'

export default (type) => combineReducers({
  byId: byId(type),
  idsList: idsList(type),
  status: status(type),
  filter: filter(type),
  pagination: pagination(type)
})

// Get one item in a state of this reducer
export const getEntity = (type, id) => createSelector(
  state => fromById.getEntity(state[type].byId, id),
  entity => { if (entity) return entity }
)

// Get all items in a state of this reducer
export const getEntities = (type) => createSelector(
  state => state,
  state => fromIdsList.getIds(state[type].idsList),
  state => (state[type].filter?state[type].filter.filter:''),
  (state, entitiesIds, filter) => {
    if (entitiesIds) {
      var entities =  entitiesIds.map(id => fromById.getEntity(state[type].byId, id))
      console.log('filter', filter, entities)
      if(filter) {
        entities = entities.filter(entity => (entity.completed==(filter=='completed')))
      }

      return entities;
    }
  }
)

// Get child entities by its parent ID
export const getChildEntities = (childType, parentType, parentId) => createSelector(
  state => state,
  state => fromById.getEntity(state[parentType].byId, parentId),
  (state, parent) => {
    if (parent && parent[childType]) {
      return parent[childType].map(id => fromById.getEntity(state[childType].byId, id))
    }
  }
)

export const isLoading = (state, type) => fromStatus.isLoading(state[type].status)

export const getErrors = (state, type) => fromStatus.getErrors(state[type].status)

export const getPagination = (state, type) => fromPagination.getPagination(state[type].pagination)
