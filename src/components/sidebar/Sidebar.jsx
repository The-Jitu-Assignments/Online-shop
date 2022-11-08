import React from 'react'
import './sidebar.css';
import { useFetch } from '../../hooks/useFetch';
import { CategoryContext } from '../../context/CategoryContext';
import { SidebarContext } from '../../context/SidebarContext';

const Sidebar = () => {
  const [active, setActive] = React.useState(null)
  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const [ , setCategoryContext] = React.useContext(CategoryContext);
  const [ sidebarContext ] = React.useContext(SidebarContext);
  if (!sidebarContext) return null;
  return (
    <div className='sidebar'>
      <ul>
        <div className={`sidebar--all ${active === 'all' && 'active'}`} onClick={() => {setCategoryContext(''); setActive('all')}}>All</div>
        {data?.map((category, i) => (
          <li 
            key={i} 
            onClick={() => {setCategoryContext(category); setActive(i)}}
            className={`${active === i ? 'active' : ''}`}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar