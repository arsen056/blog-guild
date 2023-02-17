import React, {FC} from 'react';
import {Outlet} from "react-router-dom";

type MainContentType = {
  title: string
}

export const MainContent:FC<MainContentType> = ({title}) => {
  return (
    <main id='main'>
      <h2>{title}</h2>
      <Outlet/>
    </main>
  );
};
