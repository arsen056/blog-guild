import React from 'react';
import {Link} from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <ul className={'container'}>
        <li>
          <Link to={'/blogs'}>Blogs</Link>
        </li>
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
    </aside>
  );
};
