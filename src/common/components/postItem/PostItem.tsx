import React, {FC} from 'react';
import s from './PostItem.module.css'

type PostItemType = {
  blogName: string
  title: string
  date: string
}

export const PostItem:FC<PostItemType> = ({blogName, date, title}) => {
  return (
    <li className={s.postItem}>
      <div className={s.card}>
        <div className={s.imgWrapper}>
          <img src="https://via.placeholder.com/300x180" alt=""/>
        </div>
        
        <div className={s.content}>
          <h3 className={s.blogName}>{blogName}</h3>
          
          <p className={s.title}>{title}</p>

          <div className={s.date}>{date}</div>
        </div>
      </div>
    </li>
  );
};
