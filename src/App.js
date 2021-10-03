import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { PATHS } from './const';
import Pages from './pages/index';

const App = () => {
 
  const renderHomePage = ( location, ) => {
    return (
      <Pages.TodoPage {...location} title={"Todo"} />
    )
  }
  const renderBasketPage = ( location, ) => {
    return (
      <Pages.BasketPage {...location} title={"Basket"} />
    )
  }

  return (
    <BrowserRouter>
        <Route exact render={ renderHomePage } path={PATHS.todo.url} />
        <Route exact render={ renderBasketPage } path={PATHS.basket.url} />
        <Redirect to={PATHS.todo.url} />
    </BrowserRouter>
  )
}

export default App;

