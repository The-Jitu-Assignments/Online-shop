import React from 'react';
import './table.css';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../../context/ItemContext';
import Modal from '../modal/Modal';
import Product from '../../pages/product/Product';
import { AiFillDelete } from 'react-icons/ai';
import { IconContext } from 'react-icons';



const Table = ({ tableHeadData, tableData, deleteProduct }) => {
  const [openModal, setOpenModal] = React.useState(false)
  const [, setItemContext] = React.useContext(ItemContext);
  return (
    <table>
      {tableHeadData.map((item) => (
        <tr>
          <th>{item.image}</th>
          <th>{item.title}</th>
          <th>{item.description}</th>
          <th>{item.price}</th>
          <th></th>
        </tr>
      ))}
      {tableData?.map((item) => (
        <tr key={item.id} onClick={() => {setOpenModal(true); setItemContext(item)}}>
          <td>
            <img src={item.image} alt="item--image" srcset="" />
          </td>
          <td>{item.title}</td>
          <td>{item.description.length > 100 ? `${item.description.slice(0, 150)} ...` : item.description} </td>
          <td>{item.price}</td>
          <td onClick={(e) => {deleteProduct(item.id); e.stopPropagation()}}>
            <IconContext.Provider value={{ color: 'red', size: '1.5em', title: 'Delete' }}>
              <AiFillDelete />
            </IconContext.Provider>
          </td>
        </tr>
      ))}
      <Modal 
        title={`Viewing Product`}
        open={openModal}
        onClose={() => setOpenModal(false)}
        content={<Product />}
      />
    </table>
  )
}

export default Table;