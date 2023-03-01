import React from 'react';
import {Sidebar} from "../sidebar/Sidebar";
import {Routs} from "../../routes/Routes";
import {Footer} from "common/components/footer/Footer";

export const MainPage = () => {
  return (
    <div style={{position: 'relative'}}>
      <div id='main-content' className={'container main-grid'}>
        <Sidebar/>
        <Routs/>
      </div>
      <Footer/>
    </div>
  );
};
