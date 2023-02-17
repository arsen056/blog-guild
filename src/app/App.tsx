import React from 'react';
import {Head} from "../common/components/header/Header";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Routs} from "../common/routes/Routes";
function App() {
  return (
    <div>
      <Head/>
      <div id='main-content' className={'container main-grid'}>
        <Sidebar/>
        <Routs/>
      </div>
    </div>
  );
}

export default App;
