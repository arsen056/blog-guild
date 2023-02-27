import React from 'react';
import s from './PostItem.module.css'

export const PostItem = () => {
  return (
    <li className={s.postItem}>
      <div className={s.card}>
        <div className={s.imgWrapper}>
          <img src="https://via.placeholder.com/300x180" alt=""/>
        </div>
        
        <div className={s.content}>
          <h3 className={s.blogName}>BlogName</h3>
          
          <p className={s.title}>Title</p>

          <div className={s.date}>12.12.12</div>
        </div>
      </div>
    </li>
  );
};
