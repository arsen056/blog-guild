import React, {FC} from 'react';
import s from './PostItem.module.css'
import {isoFormatDate} from "common/utils/isoFormatDate";
import {Link} from "react-router-dom";

type PostItemType = {
  id: string
  blogName: string
  title: string
  date: string
  isLoading?: boolean
}

export const PostItem: FC<PostItemType> = ({blogName, isLoading, id, date, title}) => {

  const dateIso = isoFormatDate(date)

  const isLoadingClassName = isLoading ? s.isLoading : ''

  return (
    <li className={`${s.postItem} ${isLoadingClassName}` }>
      <Link to={id}>
        <div className={s.card}>
          <div className={s.imgWrapper}>
            <img src="https://via.placeholder.com/300x180" alt=""/>
          </div>

          <div className={s.content}>
            <h3 className={s.blogName}>{blogName}</h3>

            <p className={s.title}>{title}</p>

            <div className={s.date}>{dateIso}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};
