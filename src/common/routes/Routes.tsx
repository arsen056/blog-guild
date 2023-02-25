import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainContent} from "../components/mainContent/MainContent";
import {Blogs} from "../../features/blogs/Blogs";
import {PATHS} from "./PATHS";

export const Routs = () => {
  return (
    <Routes>
      <Route element={ <MainContent title={'Blogs'}/> }>
        <Route path={'/'} element={ <Navigate to={'blogs'}/> }/>
        <Route path={PATHS.BLOGS} element={ <Blogs/> }/>
      </Route>

      <Route element={ <MainContent title={'Posts'}/> }>
        <Route path={PATHS.POSTS} element={ <h2>Posts</h2> }/>
      </Route>
    </Routes>
  );
};
