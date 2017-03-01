import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({ children }) => (
  <MuiThemeProvider>
    <div className="wrapper">
      { children }
    </div>
  </MuiThemeProvider>
);

export default App;
