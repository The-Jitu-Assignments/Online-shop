import React from 'react'
import { useFetch } from '../../hooks/useFetch';
import './form.css'

const Form = (props) => {
  const { data } = useFetch('https://fakestoreapi.com/products/categories');
  const { title, price, description, category, image, count, rate, handleInputChange } = props;
  console.log(count, rate)
  return (
    <div className='form--container'>
      <div className="form--item">
        <label htmlFor="title"></label>
        <input type="text" name='title' value={title} onChange={handleInputChange} placeholder='Enter product title' />
      </div>
      <div className="form--item">
        <label htmlFor="image"></label>
        <input type="text" name='image' value={image} onChange={handleInputChange} placeholder='Enter image url' />
      </div>
      <div className="form--item">
        <label htmlFor="description"></label>
        <textarea name="description" value={description} onChange={handleInputChange} placeholder='Enter a short description...'></textarea>
      </div>
      <div className="form--item">
        <label htmlFor="price"></label>
        <input type="number" name='price' value={price} onChange={handleInputChange} min={0} max={1000} placeholder='Enter product price' />
      </div>
      <div className="form--item">
        <label htmlFor="category"></label>
        <select name="category" value={category} onChange={handleInputChange}>
          {data?.map((category, i) => (
            <option key={i} value={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="form--item">
        <label htmlFor="rate"></label>
        <input type="number" name={"rate"} value={rate} onChange={handleInputChange} placeholder='Enter product rate' />
      </div>
       <div className="form--item">
        <label htmlFor="count"></label>
        <input type="number" name={"count"} value={count} onChange={handleInputChange} placeholder='Enter number of votes' />
      </div>
    </div>
  )
}

export default Form;