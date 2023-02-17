import React from 'react';
import s from './Header.module.css'

export const Head = () => {
  return (
    <header className={s.header}>
      <div className='container'>
        <h1>Blogger platform</h1>
      </div>
    </header>
  );
};
