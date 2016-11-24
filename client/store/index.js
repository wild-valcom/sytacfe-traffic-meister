import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import trafficMeister from 'reducers';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(trafficMeister);

export default store;
