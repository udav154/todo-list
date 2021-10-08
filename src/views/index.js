import React from 'react';
import HeaderComponent from '../components/HeaderComponent';
import SideBar from '../views/SideBar/Combain';
import '../styles/index.scss'
import AddModalComponents from '../components/AddModal';

const Layout = ({ title, children, ...props }) => {
  const [openAdd, setOpenAdd] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const drawerWidth = 300;
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);


  const toggleDrawer = () => {
    setOpen(!open);
  };

  const requareProperty = {
    open,
    drawerWidth,
    title,
    openAdd,
    setOpen,
    toggleDrawer,
    handleOpenAdd,
    handleCloseAdd,
    ...props
  }

  React.useEffect(() => {
   if (title) {
     document.title = title
   } 
  }, [title])

  return (
    <>
      <AddModalComponents {...requareProperty}/>
      <header> <HeaderComponent  {...requareProperty} >
      <SideBar   {...requareProperty} />
      <main>
      {children()}
      </main>
      </HeaderComponent>
      </header>
    </>
  )
}

export default Layout;