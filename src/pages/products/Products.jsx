import axios from 'axios';
import { useState, useEffect, useContext, useMemo } from 'react'
import Form from '../../components/forms/Form';
import Modal from '../../components/modal/Modal';
import Table from '../../components/table/Table';
import { CategoryContext } from '../../context/CategoryContext';
import './products.css'

const headData = [
  {
    image: 'image',
    title: 'title',
    description: 'description',
    price: 'price'
  }
]

const Products = () => {
  const [products, setProducts] = useState([]);
  const [order, setOrder] = useState('');
  const [limit, setLimit] = useState(0);
  const [openModal, setOpenModal]  = useState(false);
  const [ categoryContext ] = useContext(CategoryContext);

  const [product, setProduct] = useState({
    title: '',
    price: '',
    description: '',
    category: '',
    image: '',
    rate: '',
    count: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data)
    }
    fetchData();
  }, []);

  useEffect(() => {
    const handleSort = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products?sort=${order}`);

      setProducts(res.data)
    }
    handleSort();
  }, [order]);

  useEffect(() => {
    const handleLimit = async () => {
      const res = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);
      setProducts(res.data);
    }
    handleLimit();
  }, [limit])

  const getFilteredData = () => {
    if (!categoryContext) {
      return products;
    };
    return products.filter((item) => item.category === categoryContext);
  };

  const filteredData = useMemo(getFilteredData, [ categoryContext, products ]);

  const addProduct = (newProduct) => {
    setProducts([newProduct, ...products])
  }

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleInputChange = (e) => {
    const { count, rate, ...rest } = product
    setProduct({
      ...rest,
      rating:{rate, count},
      [e.target.name]: e.target.value
    })
  };

  const handleOrderChange = e => {
    setOrder(e.target.value);
  }

  const handleLimitChange = e => {
    setLimit(e.target.value)
  }

  const handleSubmit = () => {
    addProduct({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rate: product.rate,
      count: product.count
    });
    setOpenModal(false);
    setProduct({
      title: '',
      price: '',
      description: '',
      category: '',
      image: '',
      rate: '',
      count: ''
    })
  }
  return (
    <div className='products--container'>
      <div className='products--name'>
        {categoryContext ? categoryContext : 'All Products'}
      </div>
      <div className='products--container__header'>
        <div>
          <button className='add--product' onClick={() => setOpenModal(true)}>+ Add Product</button>
        </div>
        <Modal 
          title={'Add Product'} 
          open={openModal} 
          onClose={() => setOpenModal(false)} 
          content={<Form {...product} handleInputChange={handleInputChange} />}  
          handleSubmit={handleSubmit}
        />
        <div className='products--filter'>
          <div className='select--products'>
            <select onChange={handleOrderChange}>
              <option value="asc">Ascending</option>
              <option value="desc">Descending</option>
            </select>
          </div>
          <div className='select--products'>
            <select onChange={handleLimitChange}>
              <option value={20}>20</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div>
      </div>
      <div className='products--table'>
        <Table deleteProduct={deleteProduct} tableHeadData={headData} tableData={filteredData} />
      </div>
    </div>
  )
}

export default Products;