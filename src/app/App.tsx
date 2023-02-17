import React from 'react';
import {Head} from "../common/components/header/Header";
import {Sidebar} from "../common/components/sidebar/Sidebar";
function App() {
  return (
    <div>
      <Head/>
      <div id='main-content'>
        <Sidebar/>
      </div>
    </div>
  );
}

export default App;
