import React from 'react';
import {Sidebar} from "../../../common/components/sidebar/Sidebar";
import {Routs} from "../../../common/routes/Routes";

export const MainPage = () => {
  return (
    <div id='main-content' className={'container main-grid'}>
      <Sidebar/>
      <Routs/>
    </div>
  );
};
