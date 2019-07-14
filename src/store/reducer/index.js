import { combineReducers } from 'redux';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import loadingReducer from './loadingReducer';
import pageReducer from './pageReducer';
import statsReducer from './statsReducer';

const rootReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer,
  nextPage: pageReducer,
  imageStats: statsReducer
});

export default rootReducer;
