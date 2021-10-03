import React from 'react';
import Header from '../components/Header';
import SideBar from '../views/SideBar/Combain';


const Layout = ({ title, children, ...props }) => {

  const [open, setOpen] = React.useState(false);
  const drawerWidth = 350;

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