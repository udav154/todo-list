import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { PATHS } from './const';
import Pages from './pages/index';

const App = () => {
 
  const renderHomePage = ( location, ) => {
    return (
      <Pages.TodoPage {...location} title={"ToDo"} />
    )
  }
  const renderBasketPage = ( location, ) => {
    return (
      <Pages.BasketPage {...location} title={"Basket"} />
    )
  }

  const renderArchivePage = ( location, ) => {
    return (
      <Pages.ArchivePage {...location} title={"Archive"} />
    )
  }

  return (
    <BrowserRouter>
        <Route exact render={ renderHomePage } path={PATHS.todo.url} />
        <Route exact render={ renderBasketPage } path={PATHS.basket.url} />
        <Route exact render={ renderArchivePage } path={PATHS.archive.url} />
        <Redirect to={PATHS.todo.url} />
    </BrowserRouter>
  )
}

export default App;

