import { combineReducers } from 'redux';
import Accommodation from './accommodation';

const allReducers:Function = combineReducers({
  accommodations: Accommodation,
});

export default allReducers;
