import React from 'react';
import s from './BlogItem.module.css'

export const BlogItem = () => {
  return (
    <div className={s.blogItem}>
      <div id='blog-img' className={s.imgWrapper}>
        <img src={'https://via.placeholder.com/300'} alt="blog"/>
      </div>
      <div className={s.blogInfo}>
        <h3>The best blog in our village</h3>
        <p className={s.website}>
          Website: <a href={'https://www.youtube.com/'}>https://www.youtube.com/</a>
        </p>
        <p className={s.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
    </div>
  );
};
