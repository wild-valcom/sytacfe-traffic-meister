import { combineReducers } from 'redux';

import { vehicles, errorMessage, loading } from './vehicles';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  vehicles,
  errorMessage,
  loading,
  visibilityFilter
});
