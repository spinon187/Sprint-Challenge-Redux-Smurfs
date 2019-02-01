import {
  FAIL,
  FETCHING,
  FETCHED,
  SAVING,
  SAVED,
  UPDATING,
  UPDATED,
  DELETING,
  DELETED    
}from '../actions';

const initialState = {
  fetchingSmurfs: false,
  addingSmurfs: false,
  updatingSmurf: false,
  exilingSmurf: false,
  smurfs: [],
  error: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
          return {
              ...state,
              fetchingSmurfs: true,
              error: ''
          }
      case FETCHED: {
          return {
              ...state,
              smurfs: action.payload,
              fetchingSmurfs: false,
              error: ''
          }
      }
      case SAVING:
          return {
              ...state,
              addingSmurfs: true,
              error: ''
          }
      case SAVED:
          return {
              ...state,
              smurfs: action.payload,
              addingSmurfs: false,
              error: ''
          }
      case DELETING:
          return {
              ...state,
              exilingSmurf: true,
              error: ''
          }
      case DELETED:
          return {
              ...state,
              smurfs: action.payload,
              exilingSmurf: false,
              error: ''
          }
      case UPDATING:
          return {
              ...state,
              updatingSmurf: true,
              error: ''
          }
      case UPDATED:
          return {
              ...state,
              smurfs: action.payload,
              updatingSmurf: false,
              error: ''
          }
      case FAIL:
          return {
              ...state,
              fetchingSmurfs: false,
              addingSmurfs: false,
              updatingSmurf: false,
              exilingSmurf: false,
              error: action.payload
          }
      default:
      return state;
  }
}

export default reducer;