import React, {FC} from 'react';
import s from './BlogItem.module.css'

type BlogItemType = {
  name: string
  websiteUrl: string
  description: string
  createdAt: string
  img?: string
}

export const BlogItem:FC<BlogItemType> = ({name, websiteUrl, description, createdAt}) => {
  return (
    <div className={s.blogItem}>
      <div id='blog-img' className={s.imgWrapper}>
        <img src={'https://via.placeholder.com/300'} alt="blog"/>
      </div>

      <div className={s.blogInfo}>
        <h3>{name}</h3>
        <p className={s.website}>
          Website: <a href={websiteUrl}>https://www.youtube.com/</a>
        </p>
        <p className={s.description}>
          {description}
        </p>
      </div>
    </div>
  );
};
