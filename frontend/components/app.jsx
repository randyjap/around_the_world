import React from 'react';

const App = ({ children }) => (
  <div className="wrapper">
    <NavContainer />
      { children }
    <FooterContainer />
  </div>
);

export default App;
