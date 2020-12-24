import { combineReducers } from 'redux';

import sampleReducer from './sample/sample.reducers';

const rootReducer = combineReducers({
  sample: sampleReducer
});

export default rootReducer;
