import { FETCH_VEHICLES, TOGGLE_VEHICLE } from '../constants';

/**
 * loading reducer
 * @param  {Boolean} state  Current state
 * @param  {Object}  action Dispatched action
 * @return {Boolean}        Default state
 */
export function loading(state = true, action) {
  switch (action.type) {
    case FETCH_VEHICLES.REQUEST:
      return action.loading;
    case FETCH_VEHICLES.FAILURE:
      return action.loading;
    case FETCH_VEHICLES.SUCCESS:
      return action.loading;
    default:
      return state;
  }
}

/**
 * errorMessage reducer
 * @param  {Object} state  Current state
 * @param  {Object} action Dispatched action
 * @return {Object}        Default state
 */
export function errorMessage(state = null, action) {
  switch (action.type) {
    case FETCH_VEHICLES.FAILURE:
      return action.error;
    case FETCH_VEHICLES.SUCCESS:
      return null;
    default:
      return state;
  }
}

/**
 * Main vehicles reducer
 * @param  {Array}  state  Current state
 * @param  {Object} action Dispatched action
 * @return {Array}         Default state
 */
export function vehicles(state = [], action) {
  switch (action.type) {
    case FETCH_VEHICLES.SUCCESS:
      return state.concat(action.vehicles);
    case TOGGLE_VEHICLE:
      return state.map((item) => {
        if (item.id === action.id) {
          item.selected = !item.selected;
        }

        return item;
      });
    default:
      return state;
  }
}
