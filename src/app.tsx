import Tree from '@assets/Tree.jpg';
import React from 'react';

export const App: React.FC<{}> = (props) => {
  return (
    <div className="App"> 
      {"starter for react application hi"}
      <img src={Tree} alt="Tree" />
    </div>
  );
}