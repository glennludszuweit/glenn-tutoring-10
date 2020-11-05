import React from 'react';
import Home from '../../Components/Home/Home';
import Info from '../../Components/Info/Info';
import Edit from '../../Components/Edit/Edit';
import Add from '../../Components/Add/Add';
import Contact from '../../Components/Contact/Contact';
import About from '../../Components/About/About';
import List from '../../Components/List/List';
import { Switch, Route } from 'react-router-dom';

const Main = () => {
  return (
    <Switch>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/list' component={List} />
      <Route path='/add' component={Add} />
      <Route path='/edit/:id' component={Edit} />
      <Route path='/:id' component={Info} />
      <Route exact path='/' component={Home} />
    </Switch>
  );
};

export default Main;
