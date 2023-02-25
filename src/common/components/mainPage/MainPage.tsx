import React from 'react';
import {Sidebar} from "../sidebar/Sidebar";
import {Routs} from "../../routes/Routes";

export const MainPage = () => {
  return (
    <div id='main-content' className={'container main-grid'}>
      <Sidebar/>
      <Routs/>
    </div>
  );
};
