import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cart from './components/screens/Cart';
import Products from './components/screens/Products';
import UserProfile from './components/screens/UserProfile';
import Layout from './components/wrapper/Layout';

export default function Routes() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/userProfile" component={UserProfile} />
          <Route path="/" component={Products} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}
