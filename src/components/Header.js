import React from "react";
import Header from '../views/Header'

const HeaderComponent = ({ ...props }) => {


  return (
    <>
      <Header.Header  {...props} />
    </>
  )
}

export default HeaderComponent