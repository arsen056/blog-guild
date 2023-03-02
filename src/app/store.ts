import {combineReducers, configureStore} from "@reduxjs/toolkit";
import thunk from 'redux-thunk'
import {blogsReducer} from "features/blogs/blogsSlice";
import {appReducer} from "app/appSlice";
import {postsReducer} from "features/posts/postsSlice";
import {blogReducer} from "features/blogPage/blogPageSlice";

const rootReducer = combineReducers({
  app: appReducer, blogs: blogsReducer, posts: postsReducer, blog: blogReducer
})

export type RootStateType = ReturnType<typeof rootReducer>

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk)
})