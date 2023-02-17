import React from 'react';
import {Head} from "../common/components/header/Header";
import {Sidebar} from "../common/components/sidebar/Sidebar";
import {Blogs} from "./pages/blogs/Blogs";
function App() {
  return (
    <div>
      <Head/>
      <div id='main-content'>
        <Sidebar/>
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
