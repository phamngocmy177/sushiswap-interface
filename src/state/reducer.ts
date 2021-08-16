import application from './application/reducer'
import { combineReducers } from '@reduxjs/toolkit'
import create from './create/reducer'
import lists from './lists/reducer'
import multicall from './multicall/reducer'
import swap from './swap/reducer'
import transactions from './transactions/reducer'
import user from './user/reducer'

const reducer = combineReducers({
  application,
  user,
  create,
  transactions,
  swap,
  // mint,
  // burn,
  multicall,
  lists,

})

export default reducer
