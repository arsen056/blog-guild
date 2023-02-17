import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

import s from './MainContent.module.css'

type MainContentType = {
  title: string
}

export const MainContent:FC<MainContentType> = ({title}) => {
  return (
    <main id='main' className={s.main}>
      <h2 className={s.title}>{title}</h2>
      <Outlet/>
    </main>
  );
};
