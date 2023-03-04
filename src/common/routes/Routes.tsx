import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainContent} from "../components/mainContent/MainContent";
import {Blogs} from "features/blogs/Blogs";
import {PATHS} from "./PATHS";
import {Posts} from "features/posts/Posts";
import {BlogPage} from "features/blogPage/BlogPage";
import {PostPage} from "features/postPage/PostPage";

export const Routs = () => {
  return (
    <Routes>
      <Route element={ <MainContent title={'Blogs'}/> }>
        <Route path={'/'} element={ <Navigate to={'blogs'}/> }/>
        <Route path={PATHS.BLOGS} element={ <Blogs/> }/>
        <Route path={PATHS.BLOG} element={ <BlogPage/> }/>
        <Route path={`${PATHS.BLOG}/:postID`} element={ <PostPage /> }/>
      </Route>

      <Route element={ <MainContent title={'Posts'} /> }>
        <Route path={PATHS.POSTS} element={ <Posts /> }/>
        <Route path={`${PATHS.POSTS}/:postID`} element={ <PostPage /> }/>
      </Route>
    </Routes>
  );
};
