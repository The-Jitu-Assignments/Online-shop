import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './styles/styles.css';
import { ItemContext } from './context/ItemContext';
import { CategoryContext } from './context/CategoryContext';
import { SidebarContext } from './context/SidebarContext';

const App = () => {
  const [itemContext, setItemContext] = React.useState({});
  const [categoryContext, setCategoryContext] = React.useState('');
  const [sidebarContext, setSidebarContext] = React.useState(false);
  return (
    <ItemContext.Provider value={[itemContext, setItemContext]}>
      <CategoryContext.Provider value={[categoryContext, setCategoryContext]}>
        <SidebarContext.Provider value={[sidebarContext, setSidebarContext]}>
          <div className='container'>
            <AppRoutes />
          </div>
        </SidebarContext.Provider>
      </CategoryContext.Provider>
    </ItemContext.Provider>
  )
}

export default App