import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import checkNetwork from './checkNetwork';
import productReducer from './productReducer';
import favouriteReducer from './favouriteReducer';

const rootReducer = combineReducers({
  cartReducer,        
  checkNetwork,       
  productReducer,   
  favouriteReducer   
});

export default rootReducer;
