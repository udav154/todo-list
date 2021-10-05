import React from 'react';
import Header from '../components/Header';
import SideBar from '../views/SideBar/Combain';
import '../styles/index.scss'

const Layout = ({ title, children, ...props }) => {

  const [open, setOpen] = React.useState(true);
  const drawerWidth = 300;

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const requareProperty = {
    open,
    drawerWidth,
    setOpen,
    toggleDrawer,
    title,
    ...props
  }

  React.useEffect(() => {
   if (title) {
     document.title = title
   } 
  }, [title])

  return (
    <>
 
      <header> <Header  {...requareProperty} >
      <SideBar   {...requareProperty} />
      <main>
      {children()}
      </main>
      </Header>
      </header>
    </>
  )
}

export default Layout;