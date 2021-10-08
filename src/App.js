import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { PATHS } from './const';
import { TodoPage, BasketPage, ArchivePage, RegistrationPage, AuthenticationPage } from './pages';

const App = () => {

/** 
 * !DECORATOR
 * @param {*} location 
 * @returns Рендер страницы ТУДУСписка
 */
  const renderHomePage = (location,) => {
    return (
      <TodoPage {...location} title={"ToDo"} />
    )
  }
/**
 * !DECORATOR
 * @param {*} location 
 * @returns Рендер страницы Корзины
 */
  const renderBasketPage = (location,) => {
    return (
      <BasketPage {...location} title={"Basket"} />
    )
  }
/**
 * !DECORATOR
 * @param {*} location 
 * @returns Рендер страницы Архива
 */
  const renderArchivePage = (location,) => {
    return (
      <ArchivePage {...location} title={"Archive"} />
    )
  }
/**
 * !DECORATOR
 * @param {*} location 
 * @returns Рендер страницы Аутенфикации
 */
 const renderAuthenticationPage = (location,) => {
  return (
    <AuthenticationPage {...location} title={"Authentication"} />
  )
}
/**
 * !DECORATOR
 * @param {*} location 
 * @returns Рендер страницы Регистрации
 */
 const renderRegistrationPage = (location,) => {
  return (
    <RegistrationPage {...location} title={"Regisrtation"} />
  )
}

  
  return (
    <BrowserRouter>
      <Route exact render={renderHomePage} path={PATHS.todo.url} />
      <Route exact render={renderBasketPage} path={PATHS.basket.url} />
      <Route exact render={renderArchivePage} path={PATHS.archive.url} />
      <Route exact render={renderRegistrationPage} path={PATHS.registration.url} />
      <Route exact render={renderAuthenticationPage} path={PATHS.authentication.url} />
    </BrowserRouter>
  )
}

export default App;

