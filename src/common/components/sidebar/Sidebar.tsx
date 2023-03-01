import React from 'react';
import {NavLink} from "react-router-dom";
import s from './Sidebar.module.css'
import {PATHS} from "common/routes/PATHS";

const activeClassName = ({isActive}: {isActive: boolean}) => isActive ? `${s.navLink} ${s.active}` : `${s.navLink}`

export const Sidebar = () => {
  return (
    <aside id='sidebar' className={s.sidebar}>
      <ul className={s.navList}>

        <li className={s.navItem}>
          <NavLink
            className={activeClassName}
            to={PATHS.BLOGS}>
            Blogs
          </NavLink>
          <span className={s.redLine}></span>
        </li>

        <li className={s.navItem}>
          <NavLink
            className={activeClassName}
            to={PATHS.POSTS}>
            Posts
          </NavLink>
          <span className={s.redLine}></span>
        </li>

      </ul>
    </aside>
  );
};
