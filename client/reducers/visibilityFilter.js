import { VISIBILITY_FILTERS } from '../constants';

const initialState = {
  COLOR: '',
  BRAND: '',
  TYPE: ''
};

/**
 * Main visibilityFilter reducer
 * @param  {Object}  state Current state
 * @param  {Object} action Dispatched action
 * @return {Object}        Default state
 */
function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case VISIBILITY_FILTERS.CHANGE_TYPE:
      return Object.assign({}, state, { TYPE: action.value });
    case VISIBILITY_FILTERS.CHANGE_COLOR:
      return Object.assign({}, state, { COLOR: action.value });
    case VISIBILITY_FILTERS.CHANGE_BRAND:
      return Object.assign({}, state, { BRAND: action.value });
    default:
      return state;
  }
}

export default visibilityFilter;
