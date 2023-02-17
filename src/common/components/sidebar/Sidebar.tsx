import React from 'react';
import {Link} from "react-router-dom";
import s from './Sidebar.module.css'
import {PATHS} from "../../routes/PATHS";

export const Sidebar = () => {
  return (
    <aside id='sidebar' className={s.sidebar}>
      <ul className={'container'}>
        <li>
          <Link to={PATHS.BLOGS}>Blogs</Link>
        </li>
        <li>
          <Link to={PATHS.POSTS}>Posts</Link>
        </li>
      </ul>
    </aside>
  );
};
