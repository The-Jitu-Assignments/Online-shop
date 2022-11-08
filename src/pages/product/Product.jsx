import React from 'react';
import { useParams } from 'react-router-dom';
import './product.css';
import { ItemContext } from '../../context/ItemContext';

const Product = () => {
  const { id } = useParams();
  const  [ itemContext ] = React.useContext(ItemContext);
  return (
    <div className='product--container'>
      <div className='product--card'>
        <div className='product--img'>
          <img src={itemContext.image} alt='product-image' />
        </div>
        <h3>
          {itemContext.title}
        </h3>
        <div>
          {itemContext.description}
        </div>
      </div>
    </div>
  )
}

export default Product;