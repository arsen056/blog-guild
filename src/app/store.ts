import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {blogReducer} from "features/blogs/blogsSlice";
import {appReducer} from "app/appSlice";

const rootReducer = combineReducers({app: appReducer, blogs: blogReducer})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})