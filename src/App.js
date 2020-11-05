import React from 'react';
import Main from './Containers/Main/Main';
import Nav from './Containers/Nav/Nav';
import { UserProvider } from './Context/UserContext';

import './App.scss';
import { SearchProvider } from './Context/SearchContext';

const App = () => {
  return (
    <UserProvider>
      <SearchProvider>
        <Nav />
        <Main />
      </SearchProvider>
    </UserProvider>
  );
};

export default App;
